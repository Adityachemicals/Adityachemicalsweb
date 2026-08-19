import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API || process.env.RESEND_API_KEY);

interface ParamItem {
  name: string;
  criteria: string;
  required: "Yes" | "No" | "";
  remarks: string;
}

interface AdditionalTest {
  parameter: string;
  remarks: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      customerEmail,
      customerName,
      contactPerson,
      productName = "Magnesium Taurinate",
      use = "Tablet",
      regulatoryUse = "Feed additives",
      reference = "IH",
      specificationNo = "SPEC/FG00248/01",
      packingPrimary = "400 GSM LDPE bags packed",
      packingSecondary = "HDPE Bags",
      visualParameters = [],
      testingParameters = [],
      additionalTests = [],
      testingParametersPage3 = [],
      declarations = {},
      otherRequirements = "",
      otherRequirementsRemarks = "",
      customerComments = "",
    } = body;

    if (!customerEmail) {
      return NextResponse.json(
        { error: "Customer email is required" },
        { status: 400 }
      );
    }

    // Build visual parameters table HTML
    const visualRowsHtml = visualParameters
      .map(
        (item: ParamItem) => `
        <tr>
          <td style="border: 1px solid #003875; padding: 8px; font-weight: bold; color: #003875; font-size: 13px;">${item.name}</td>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px; color: #003875;">${item.criteria}</td>
          <td style="border: 1px solid #003875; padding: 8px; text-align: center; font-size: 13px; font-weight: bold; color: ${item.required === "Yes" ? "#006600" : item.required === "No" ? "#cc0000" : "#555"};">
            ${item.required ? `[${item.required === "Yes" ? "✓" : "✗"}] ${item.required}` : "-"}
          </td>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px;">${item.remarks || "-"}</td>
        </tr>
      `
      )
      .join("");

    // Build testing parameters table HTML (Page 1)
    const testingRowsHtml = testingParameters
      .map(
        (item: ParamItem) => `
        <tr>
          <td style="border: 1px solid #003875; padding: 8px; font-weight: bold; color: #003875; font-size: 13px;">${item.name}</td>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px; color: #003875;">${item.criteria}</td>
          <td style="border: 1px solid #003875; padding: 8px; text-align: center; font-size: 13px; font-weight: bold; color: ${item.required === "Yes" ? "#006600" : item.required === "No" ? "#cc0000" : "#555"};">
            ${item.required ? `[${item.required === "Yes" ? "✓" : "✗"}] ${item.required}` : "-"}
          </td>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px;">${item.remarks || "-"}</td>
        </tr>
      `
      )
      .join("");

    // Build additional tests table HTML (Page 2)
    const addTestsRowsHtml = additionalTests
      .map(
        (t: AdditionalTest) => `
        <tr>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px; font-weight: bold; color: #003875;">${t.parameter || "None"}</td>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px;">${t.remarks || "-"}</td>
        </tr>
      `
      )
      .join("");

    // Build testing parameters table HTML (Page 3)
    const page3TestingRowsHtml = testingParametersPage3
      .map(
        (t: AdditionalTest) => `
        <tr>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px; font-weight: bold; color: #003875;">${t.parameter || "None"}</td>
          <td style="border: 1px solid #003875; padding: 8px; font-size: 13px;">${t.remarks || "-"}</td>
        </tr>
      `
      )
      .join("");

    // Declarations checklist list
    const declarationItems = [
      { key: "tseBseFree", label: "TSE BSE Free" },
      { key: "nonGmo", label: "Non GMO" },
      { key: "freeFromAllergen", label: "Free from Allergen" },
      { key: "veganVegetarian", label: "Vegan / Vegetarian" },
      { key: "melamineFree", label: "Melamine free" },
      { key: "glutenFree", label: "Gluten free" },
      { key: "chemicalSynthesis", label: "Chemical synthesis" },
      { key: "otherDocumentRequired", label: "Other Document Required" },
    ];

    const declarationHtml = declarationItems
      .map((d) => {
        const checked = !!declarations[d.key];
        return `
        <div style="display: inline-block; width: 30%; margin-bottom: 8px; font-size: 13px; font-family: Georgia, serif;">
          <span style="font-size: 16px; font-weight: bold; color: #003875;">${checked ? "☑" : "☐"}</span>
          <span style="margin-left: 4px; font-weight: bold; color: #003875;">${d.label}</span>
        </div>
      `;
      })
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Specification Sheet Submission from ${customerEmail}</title>
      </head>
      <body style="font-family: Georgia, 'Times New Roman', serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #111;">
        <div style="max-width: 800px; margin: 0 auto; background: #ffffff; padding: 30px; border: 1px solid #c0c6d4; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
          
          <!-- Header section -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border-bottom: 2px solid #003875; padding-bottom: 10px;">
            <tr>
              <td style="vertical-align: top; width: 50%;">
                <h1 style="margin: 0; color: #003875; font-size: 24px; font-weight: bold; font-family: Georgia, serif;">ADITYA CHEMICALS</h1>
                <p style="margin: 6px 0 0 0; color: #003875; font-size: 12px; font-weight: bold;">SUBMITTED BY: ${customerEmail}</p>
              </td>
              <td style="vertical-align: top; text-align: right; font-size: 13px; color: #003875; line-height: 1.4; font-weight: bold; font-family: Georgia, serif;">
                24-25, Ajanta Industrial Estate,<br>
                At. Vasna - Iyava, Tal. Sanand,<br>
                Ahmedabad-382110 Gujarat, INDIA
              </td>
            </tr>
          </table>

          <!-- Main Customer Spec Table -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 2px solid #003875;">
            <tr>
              <td style="width: 30%; background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Customer Email</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${customerEmail}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Customer Name</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${customerName || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Product Name</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${productName || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Use</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${use || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Regulatory Use</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${regulatoryUse || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Reference</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${reference || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Specification No.</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;" colspan="2">${specificationNo || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #003875; color: #ffffff; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;" rowspan="2">Packing</td>
              <td style="width: 25%; background: #e4eef8; color: #003875; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Primary</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;">${packingPrimary || "N/A"}</td>
            </tr>
            <tr>
              <td style="background: #e4eef8; color: #003875; padding: 8px 12px; font-weight: bold; font-size: 13px; border: 1px solid #003875;">Secondary</td>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: bold; color: #003875; border: 1px solid #003875;">${packingSecondary || "N/A"}</td>
            </tr>
          </table>

          <!-- Visual Inspection Parameters -->
          <div style="background: #003875; color: #ffffff; font-weight: bold; text-align: center; padding: 10px; font-size: 16px; margin-top: 25px; text-transform: uppercase;">
            Visual Inspection Parameters
          </div>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #003875; margin-bottom: 20px;">
            <tr style="background: #d9e7f5; color: #003875; font-weight: bold; text-align: center;">
              <th style="border: 1px solid #003875; padding: 8px; width: 25%; font-size: 13px;">Parameters</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 35%; font-size: 13px;">Acceptance Criteria</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 15%; text-align: center; font-size: 12px;">Required Yes/No</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 25%; font-size: 13px;">Remarks by Customer</th>
            </tr>
            ${visualRowsHtml}
          </table>

          <!-- Testing Parameters (Page 1) -->
          <div style="background: #003875; color: #ffffff; font-weight: bold; text-align: center; padding: 10px; font-size: 16px; margin-top: 25px; text-transform: uppercase;">
            Testing Parameters
          </div>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #003875; margin-bottom: 20px;">
            <tr style="background: #d9e7f5; color: #003875; font-weight: bold; text-align: center;">
              <th style="border: 1px solid #003875; padding: 8px; width: 25%; font-size: 13px;">Parameters</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 35%; font-size: 13px;">Acceptance Criteria</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 15%; text-align: center; font-size: 12px;">Required Yes/No</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 25%; font-size: 13px;">Remarks by Customer</th>
            </tr>
            ${testingRowsHtml}
          </table>

          <!-- Page Break indicator -->
          <hr style="border: 0; border-top: 1px dashed #ccc; margin: 30px 0;" />

          <!-- Additional Tests (Page 2) -->
          <div style="background: #003875; color: #ffffff; font-weight: bold; text-align: center; padding: 8px; font-size: 14px;">
            Additional Tests (on customer request, this is not part of typical specification)
          </div>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #003875; margin-bottom: 20px;">
            <tr style="background: #d9e7f5; color: #003875; font-weight: bold; text-align: center;">
              <th style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 13px;">Parameters</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 13px;">Remarks by Customer</th>
            </tr>
            ${addTestsRowsHtml}
          </table>

          <!-- Page Break indicator -->
          <hr style="border: 0; border-top: 1px dashed #ccc; margin: 30px 0;" />

          <!-- Testing Parameters Continued (Page 3) -->
          <div style="background: #003875; color: #ffffff; font-weight: bold; text-align: center; padding: 10px; font-size: 16px; text-transform: uppercase;">
            Testing Parameters
          </div>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #003875; margin-bottom: 20px;">
            <tr style="background: #d9e7f5; color: #003875; font-weight: bold; text-align: center;">
              <th style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 13px;">Parameters</th>
              <th style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 13px;">Remarks by Customer</th>
            </tr>
            ${page3TestingRowsHtml}
          </table>

          <!-- Declarations (Page 3) -->
          <div style="background: #003875; color: #ffffff; font-weight: bold; text-align: center; padding: 10px; font-size: 16px; text-transform: uppercase;">
            Other Documents
          </div>
          <div style="border: 1px solid #003875; padding: 15px; background: #fafbfc; margin-bottom: 20px;">
            <p style="margin: 0 0 12px 0; font-weight: bold; color: #003875; font-size: 14px;">Declarations : Please tick (✓) the applicable declaration requirements.</p>
            <div>
              ${declarationHtml}
            </div>
          </div>

          <!-- Other Requirements & Remarks -->
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #003875; margin-bottom: 20px;">
            <tr style="background: #ffffff; color: #003875; font-weight: bold;">
              <td style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 13px;">Other Requirements</td>
              <td style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 12px;">Remarks by customer</td>
            </tr>
            <tr>
              <td style="border: 1px solid #003875; padding: 10px; font-size: 13px; vertical-align: top; height: 60px;">${otherRequirements || ""}</td>
              <td style="border: 1px solid #003875; padding: 10px; font-size: 13px; vertical-align: top; height: 60px;">${otherRequirementsRemarks || ""}</td>
            </tr>
          </table>

          <!-- Customer Comments -->
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #003875; margin-bottom: 25px;">
            <tr style="background: #ffffff; color: #003875; font-weight: bold;">
              <td style="border: 1px solid #003875; padding: 8px; width: 50%; font-size: 13px;">Customer Comments</td>
              <td style="border: 1px solid #003875; padding: 10px; font-size: 13px; vertical-align: top; height: 60px;">${customerComments || ""}</td>
            </tr>
          </table>

          <div style="border-top: 2px solid #003875; pt: 15px; text-align: center; color: #666; font-size: 11px; margin-top: 30px;">
            Submitted electronically via Aditya Chemicals Customer Portal by ${customerEmail}.
          </div>
        </div>
      </body>
      </html>
    `;

    // Verified domain sender: connect@adityachemicals.in
    // Sending to itzhimanshu3107@gmail.com and connect@adityachemicals.in
    const emailResult = await resend.emails.send({
      from: "Aditya Chemicals <connect@adityachemicals.in>",
      to: ["itzhimanshu3107@gmail.com", "connect@adityachemicals.in"],
      replyTo: customerEmail,
      subject: `New Specification Sheet Submission from ${customerEmail}`,
      html: emailHtml,
    });

    if (emailResult.error) {
      console.error("Resend Error:", emailResult.error);
      return NextResponse.json(
        { error: emailResult.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailResult.data });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Specification submission API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
