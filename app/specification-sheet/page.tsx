"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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

interface TokenPayload {
  customerName?: string;
  customerEmail?: string;
  contactPerson?: string;
  productName?: string;
  use?: string;
  regulatoryUse?: string;
  reference?: string;
  specificationNo?: string;
  packingPrimary?: string;
  packingSecondary?: string;
  expiresAt?: number | null;
}

// Token helper functions
function encodeCustomerToken(payload: TokenPayload): string {
  try {
    const jsonStr = JSON.stringify(payload);
    if (typeof window !== "undefined") {
      return btoa(encodeURIComponent(jsonStr));
    }
    return Buffer.from(encodeURIComponent(jsonStr)).toString("base64");
  } catch (err) {
    console.error("Token encoding error:", err);
    return "";
  }
}

function decodeCustomerToken(tokenStr: string): TokenPayload | null {
  try {
    let jsonStr = "";
    if (typeof window !== "undefined") {
      jsonStr = decodeURIComponent(atob(tokenStr));
    } else {
      jsonStr = decodeURIComponent(
        Buffer.from(tokenStr, "base64").toString("utf-8")
      );
    }
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error("Token decoding error:", err);
    return null;
  }
}

function SpecificationSheetForm() {
  const searchParams = useSearchParams();

  // Form State
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [productName, setProductName] = useState("");
  const [use, setUse] = useState("");
  const [regulatoryUse, setRegulatoryUse] = useState("");
  const [reference, setReference] = useState("");
  const [specificationNo, setSpecificationNo] = useState("");
  const [packingPrimary, setPackingPrimary] = useState("");
  const [packingSecondary, setPackingSecondary] = useState("");

  // Expiration check
  const [isExpired, setIsExpired] = useState(false);
  const [expirationDateStr, setExpirationDateStr] = useState("");

  // Visual Inspection Parameters
  const [visualParameters, setVisualParameters] = useState<ParamItem[]>([
    {
      name: "Description",
      criteria: "White to Off White Power",
      required: "",
      remarks: "",
    },
  ]);

  // Testing Parameters (Page 1)
  const [testingParameters, setTestingParameters] = useState<ParamItem[]>([
    {
      name: "Identification",
      criteria: "Positive for Magnesium",
      required: "",
      remarks: "",
    },
    {
      name: "pH",
      criteria: "7.0 - 11.0",
      required: "",
      remarks: "",
    },
    {
      name: "Loss on Drying",
      criteria: "NMT 5.0%",
      required: "",
      remarks: "",
    },
    {
      name: "Magnesium % w/w",
      criteria: "8.0% - 10.3%",
      required: "",
      remarks: "",
    },
    {
      name: "Lead",
      criteria: "NMT 3 ppm",
      required: "",
      remarks: "",
    },
    {
      name: "Mercury",
      criteria: "NMT 0.1 ppm",
      required: "",
      remarks: "",
    },
    {
      name: "Lead",
      criteria: "NMT 3 ppm",
      required: "",
      remarks: "",
    },
    {
      name: "Mercury",
      criteria: "NMT 0.1 ppm",
      required: "",
      remarks: "",
    },
  ]);

  // Additional Tests (Page 2: 15 prepopulated rows)
  const [additionalTests, setAdditionalTests] = useState<AdditionalTest[]>(
    Array(15)
      .fill(null)
      .map(() => ({ parameter: "None", remarks: "" }))
  );

  // Testing Parameters (Page 3: 5 prepopulated rows)
  const [testingParametersPage3, setTestingParametersPage3] = useState<
    AdditionalTest[]
  >(
    Array(5)
      .fill(null)
      .map(() => ({ parameter: "None", remarks: "" }))
  );

  // Declarations
  const [declarations, setDeclarations] = useState<{ [key: string]: boolean }>({
    tseBseFree: false,
    veganVegetarian: false,
    chemicalSynthesis: false,
    nonGmo: false,
    melamineFree: false,
    otherDocumentRequired: false,
    freeFromAllergen: false,
    glutenFree: false,
  });

  const [otherRequirements, setOtherRequirements] = useState("");
  const [otherRequirementsRemarks, setOtherRequirementsRemarks] = useState("");
  const [customerComments, setCustomerComments] = useState("");

  // Token check
  const [hasToken, setHasToken] = useState(false);

  // Status & Link Generator Modal States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  // Link Generator Modal
  const [showGenModal, setShowGenModal] = useState(false);
  const [genCustomerName, setGenCustomerName] = useState("");
  const [genCustomerEmail, setGenCustomerEmail] = useState("");
  const [genProductName, setGenProductName] = useState("");
  const [genExpiryDays, setGenExpiryDays] = useState("14");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [genCopied, setGenCopied] = useState(false);

  // Read URL Token / Search Params on Mount
  useEffect(() => {
    const tokenParam = searchParams.get("token");
    let payload: TokenPayload | null = null;

    if (tokenParam) {
      setHasToken(true);
      payload = decodeCustomerToken(tokenParam);
    } else {
      // Direct query params fallback
      const cName = searchParams.get("customerName");
      const cEmail = searchParams.get("customerEmail");
      const pName = searchParams.get("productName");
      const expParam = searchParams.get("exp");

      if (cName || cEmail || pName || expParam) {
        setHasToken(true);
        payload = {
          customerName: cName || "",
          customerEmail: cEmail || "",
          productName: pName || "",
          expiresAt: expParam ? parseInt(expParam, 10) : null,
        };
      }
    }

    if (payload) {
      if (payload.customerName) setCustomerName(payload.customerName);
      if (payload.customerEmail) setCustomerEmail(payload.customerEmail);
      if (payload.contactPerson) setContactPerson(payload.contactPerson);
      if (payload.productName) setProductName(payload.productName);
      if (payload.use) setUse(payload.use);
      if (payload.regulatoryUse) setRegulatoryUse(payload.regulatoryUse);
      if (payload.reference) setReference(payload.reference);
      if (payload.specificationNo) setSpecificationNo(payload.specificationNo);
      if (payload.packingPrimary) setPackingPrimary(payload.packingPrimary);
      if (payload.packingSecondary)
        setPackingSecondary(payload.packingSecondary);

      if (payload.expiresAt) {
        setExpirationDateStr(new Date(payload.expiresAt).toLocaleDateString());
        if (Date.now() > payload.expiresAt) {
          setIsExpired(true);
        }
      }
    }
  }, [searchParams]);

  const handleVisualChange = (
    index: number,
    field: keyof ParamItem,
    val: string
  ) => {
    const updated = [...visualParameters];
    updated[index] = { ...updated[index], [field]: val };
    setVisualParameters(updated);
  };

  const handleTestingChange = (
    index: number,
    field: keyof ParamItem,
    val: string
  ) => {
    const updated = [...testingParameters];
    updated[index] = { ...updated[index], [field]: val };
    setTestingParameters(updated);
  };

  const handleAddTestChange = (
    index: number,
    field: keyof AdditionalTest,
    val: string
  ) => {
    const updated = [...additionalTests];
    updated[index] = { ...updated[index], [field]: val };
    setAdditionalTests(updated);
  };

  const handlePage3TestChange = (
    index: number,
    field: keyof AdditionalTest,
    val: string
  ) => {
    const updated = [...testingParametersPage3];
    updated[index] = { ...updated[index], [field]: val };
    setTestingParametersPage3(updated);
  };

  const toggleDeclaration = (key: string) => {
    setDeclarations((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleResetForm = () => {
    setCustomerName("");
    setContactPerson("");
    setCustomerEmail("");
    setProductName("");
    setUse("");
    setRegulatoryUse("");
    setReference("");
    setSpecificationNo("");
    setPackingPrimary("");
    setPackingSecondary("");
    setVisualParameters(
      visualParameters.map((p) => ({ ...p, required: "", remarks: "" }))
    );
    setTestingParameters(
      testingParameters.map((p) => ({ ...p, required: "", remarks: "" }))
    );
    setAdditionalTests(
      Array(15)
        .fill(null)
        .map(() => ({ parameter: "None", remarks: "" }))
    );
    setTestingParametersPage3(
      Array(5)
        .fill(null)
        .map(() => ({ parameter: "None", remarks: "" }))
    );
    setDeclarations({
      tseBseFree: false,
      veganVegetarian: false,
      chemicalSynthesis: false,
      nonGmo: false,
      melamineFree: false,
      otherDocumentRequired: false,
      freeFromAllergen: false,
      glutenFree: false,
    });
    setOtherRequirements("");
    setOtherRequirementsRemarks("");
    setCustomerComments("");
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    let expiresAt: number | null = null;
    if (genExpiryDays !== "never") {
      const days = parseInt(genExpiryDays, 10);
      expiresAt = Date.now() + days * 24 * 60 * 60 * 1000;
    }

    const payload: TokenPayload = {
      customerName: genCustomerName,
      expiresAt,
    };

    const tokenStr = encodeCustomerToken(payload);
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://www.adityachemicals.com";
    const fullUrl = `${origin}/specification-sheet?token=${tokenStr}`;

    setGeneratedUrl(fullUrl);
  };

  const handleCopyGeneratedUrl = () => {
    if (typeof window !== "undefined" && generatedUrl) {
      navigator.clipboard.writeText(generatedUrl);
      setGenCopied(true);
      setTimeout(() => setGenCopied(false), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isExpired) {
      setErrorMessage(
        "This specification sheet link has expired. Please request a new link from Aditya Chemicals."
      );
      return;
    }
    if (!customerEmail) {
      setErrorMessage("Please enter your recipient email address to submit.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/specification-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerEmail,
          customerName,
          contactPerson,
          productName,
          use,
          regulatoryUse,
          reference,
          specificationNo,
          packingPrimary,
          packingSecondary,
          visualParameters,
          testingParameters,
          additionalTests,
          testingParametersPage3,
          declarations,
          otherRequirements,
          otherRequirementsRemarks,
          customerComments,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit specification sheet");
      }

      setSubmittedSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-2 sm:px-4 md:px-8 font-serif text-gray-900 selection:bg-blue-100">
      {/* Top Floating Action Bar */}
      <div className="max-w-[850px] mx-auto mb-8 bg-white border border-gray-300 rounded-xl p-4 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 font-sans print:hidden">
        <div>
          <h1 className="text-base font-bold text-[#003875] tracking-wide">
            Customer Specification Sheet Form
          </h1>
          <p className="text-xs text-gray-500 font-normal">
            Fill the details below. Click submit to email the exact formatted document.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          {!hasToken && (
            <button
              type="button"
              onClick={() => setShowGenModal(true)}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-[#003875] hover:bg-[#002b55] text-white rounded-lg transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">qr_code_2</span>
              Create Customer Link
            </button>
          )}

          <button
            type="button"
            onClick={handleResetForm}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors border border-gray-300"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Reset Form
          </button>

          {!hasToken && (
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors border border-gray-300"
            >
              <span className="material-symbols-outlined text-sm">link</span>
              {copiedLink ? "Link Copied!" : "Share Link"}
            </button>
          )}

          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-blue-50 hover:bg-blue-100 text-[#003875] rounded-lg transition-colors border border-blue-200"
          >
            <span className="material-symbols-outlined text-sm">print</span>
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Link Expiration Banner */}
      {isExpired && (
        <div className="max-w-[850px] mx-auto mb-6 p-4 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-sm font-sans flex items-center gap-3 shadow-md print:hidden">
          <span className="material-symbols-outlined text-amber-600 text-2xl">
            warning
          </span>
          <div>
            <p className="font-bold">This Specification Sheet Link Has Expired ({expirationDateStr})</p>
            <p className="text-xs text-amber-700 mt-0.5">
              Please contact your sales representative at Aditya Chemicals to receive an updated link.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-[850px] mx-auto space-y-12">
        {/* ================= PAGE 1 ================= */}
        <div className="bg-white p-8 sm:p-12 shadow-2xl border border-gray-300 rounded-sm print:shadow-none print:border-none print:p-0 print:m-0 min-h-[1100px] flex flex-col justify-between">
          <div>
            {/* Header section matching exact document */}
            <div className="flex flex-row justify-between items-start border-b-2 border-[#003875] pb-4 mb-6">
              <div>
                <Image
                  src="/aditya_logo.png"
                  alt="Aditya Chemicals"
                  width={240}
                  height={65}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="text-right text-sm font-bold text-[#003875] leading-snug">
                <p>24-25, Ajanta Industrial Estate,</p>
                <p>At. Vasna - Iyava, Tal. Sanand,</p>
                <p>Ahmedabad-382110 Gujarat, INDIA</p>
              </div>
            </div>

            {/* Metadata Table with Separated Box Spacing & Borders */}
            <table className="w-full border-separate border-spacing-1.5 text-sm mb-6">
              <tbody>
                <tr>
                  <td className="w-1/3 bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle">
                    Customer Name
                  </td>
                  <td className="bg-white text-[#003875] border border-[#3875b4] px-3 py-2 rounded-xs align-middle" colSpan={2}>
                    <input
                      type="text"
                      placeholder="Enter Customer Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle">
                    Product Name
                  </td>
                  <td className="bg-white text-[#003875] border border-[#3875b4] px-3 py-2 rounded-xs font-bold align-middle" colSpan={2}>
                    <input
                      type="text"
                      placeholder="Enter Product Name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle">
                    Use
                  </td>
                  <td className="bg-white text-[#003875] border border-[#3875b4] px-3 py-2 rounded-xs font-bold align-middle" colSpan={2}>
                    <input
                      type="text"
                      placeholder="Enter Use (e.g. Tablet)"
                      value={use}
                      onChange={(e) => setUse(e.target.value)}
                      className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle">
                    Regulatory Use
                  </td>
                  <td className="bg-white text-[#003875] border border-[#3875b4] px-3 py-2 rounded-xs font-bold align-middle" colSpan={2}>
                    <input
                      type="text"
                      placeholder="Enter Regulatory Use (e.g. Feed additives)"
                      value={regulatoryUse}
                      onChange={(e) => setRegulatoryUse(e.target.value)}
                      className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle">
                    Reference
                  </td>
                  <td className="bg-white text-[#003875] border border-[#3875b4] px-3 py-2 rounded-xs font-bold align-middle" colSpan={2}>
                    <input
                      type="text"
                      placeholder="Enter Reference (e.g. IH)"
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle">
                    Specification No.
                  </td>
                  <td className="bg-white text-[#003875] border border-[#3875b4] px-3 py-2 rounded-xs font-bold align-middle" colSpan={2}>
                    <input
                      type="text"
                      placeholder="Enter Specification No."
                      value={specificationNo}
                      onChange={(e) => setSpecificationNo(e.target.value)}
                      className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="bg-[#003875] text-white font-bold px-3 py-2 border border-[#3875b4] rounded-xs align-middle"
                    rowSpan={2}
                  >
                    Packing
                  </td>
                  <td className="bg-white border border-[#3875b4] px-3 py-2 rounded-xs font-bold text-[#003875] align-middle" colSpan={2}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[#003875] font-bold min-w-[80px]">Primary</span>
                      <input
                        type="text"
                        placeholder="Enter Primary Packing"
                        value={packingPrimary}
                        onChange={(e) => setPackingPrimary(e.target.value)}
                        className="w-full text-right font-bold text-[#003875] focus:outline-none bg-transparent"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="bg-white border border-[#3875b4] px-3 py-2 rounded-xs font-bold text-[#003875] align-middle" colSpan={2}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[#003875] font-bold min-w-[80px]">Secondary</span>
                      <input
                        type="text"
                        placeholder="Enter Secondary Packing"
                        value={packingSecondary}
                        onChange={(e) => setPackingSecondary(e.target.value)}
                        className="w-full text-center sm:text-left font-bold text-[#003875] focus:outline-none bg-transparent ml-8"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Visual Inspection Parameters Header Banner */}
            <div className="bg-[#003875] text-white font-bold text-center py-2.5 px-4 text-base sm:text-lg tracking-wide uppercase mb-1 mt-6 border border-[#3875b4] rounded-xs">
              Visual Inspection Parameters
            </div>
            <table className="w-full border-separate border-spacing-1.5 text-sm mb-6">
              <thead>
                <tr className="bg-[#d9e7f5] text-[#003875] font-bold">
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/4 text-center">
                    Parameters
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-2/5 text-center">
                    Acceptance Criteria
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/6 text-center text-xs">
                    Required<br />Yes/No
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/4 text-center">
                    Remarks by Customer
                  </th>
                </tr>
              </thead>
              <tbody>
                {visualParameters.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs font-bold text-[#003875] bg-white align-middle">
                      {item.name}
                    </td>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs text-[#003875] font-normal bg-white align-middle">
                      {item.criteria}
                    </td>
                    <td className="p-2 border border-[#3875b4] rounded-xs text-center bg-white align-middle">
                      <div className="flex flex-col items-start justify-center gap-1 pl-2">
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-green-700 text-xs">
                          <input
                            type="checkbox"
                            checked={item.required === "Yes"}
                            onChange={() =>
                              handleVisualChange(
                                idx,
                                "required",
                                item.required === "Yes" ? "" : "Yes"
                              )
                            }
                            className="accent-green-700 h-4 w-4 border-2 border-green-600 rounded-xs"
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-red-600 text-xs">
                          <input
                            type="checkbox"
                            checked={item.required === "No"}
                            onChange={() =>
                              handleVisualChange(
                                idx,
                                "required",
                                item.required === "No" ? "" : "No"
                              )
                            }
                            className="accent-red-600 h-4 w-4 border-2 border-red-600 rounded-xs"
                          />
                          No
                        </label>
                      </div>
                    </td>
                    <td className="p-1.5 border border-[#3875b4] rounded-xs bg-white align-middle">
                      <input
                        type="text"
                        placeholder="Enter remarks..."
                        value={item.remarks}
                        onChange={(e) =>
                          handleVisualChange(idx, "remarks", e.target.value)
                        }
                        className="w-full p-1 text-gray-900 focus:outline-none bg-transparent"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Testing Parameters Header Banner */}
            <div className="bg-[#003875] text-white font-bold text-center py-2.5 px-4 text-base sm:text-lg tracking-wide uppercase mb-1 mt-6 border border-[#3875b4] rounded-xs">
              Testing Parameters
            </div>
            <table className="w-full border-separate border-spacing-1.5 text-sm mb-4">
              <thead>
                <tr className="bg-[#d9e7f5] text-[#003875] font-bold">
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/4 text-center">
                    Parameters
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-2/5 text-center">
                    Acceptance Criteria
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/6 text-center text-xs">
                    Required<br />Yes/No
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/4 text-center">
                    Remarks by Customer
                  </th>
                </tr>
              </thead>
              <tbody>
                {testingParameters.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs font-bold text-[#003875] bg-white align-middle">
                      {item.name}
                    </td>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs text-[#003875] font-normal bg-white align-middle">
                      {item.criteria}
                    </td>
                    <td className="p-2 border border-[#3875b4] rounded-xs text-center bg-white align-middle">
                      <div className="flex flex-col items-start justify-center gap-1 pl-2">
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-green-700 text-xs">
                          <input
                            type="checkbox"
                            checked={item.required === "Yes"}
                            onChange={() =>
                              handleTestingChange(
                                idx,
                                "required",
                                item.required === "Yes" ? "" : "Yes"
                              )
                            }
                            className="accent-green-700 h-4 w-4 border-2 border-green-600 rounded-xs"
                          />
                          Yes
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer font-bold text-red-600 text-xs">
                          <input
                            type="checkbox"
                            checked={item.required === "No"}
                            onChange={() =>
                              handleTestingChange(
                                idx,
                                "required",
                                item.required === "No" ? "" : "No"
                              )
                            }
                            className="accent-red-600 h-4 w-4 border-2 border-red-600 rounded-xs"
                          />
                          No
                        </label>
                      </div>
                    </td>
                    <td className="p-1.5 border border-[#3875b4] rounded-xs bg-white align-middle">
                      <input
                        type="text"
                        placeholder="Enter remarks..."
                        value={item.remarks}
                        onChange={(e) =>
                          handleTestingChange(idx, "remarks", e.target.value)
                        }
                        className="w-full p-1 text-gray-900 focus:outline-none bg-transparent"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right text-xs font-sans text-gray-400 pt-2">Page 1</div>
        </div>

        {/* ================= PAGE 2 ================= */}
        <div className="bg-white p-8 sm:p-12 shadow-2xl border border-gray-300 rounded-sm print:shadow-none print:border-none print:p-0 print:m-0 min-h-[1100px] flex flex-col justify-between">
          <div>
            <div className="bg-[#003875] text-white font-bold text-center py-2.5 px-4 text-sm sm:text-base tracking-wide mb-1 border border-[#3875b4] rounded-xs">
              Additional Tests (on customer request, this is not part of typical specification)
            </div>
            <table className="w-full border-separate border-spacing-1.5 text-sm mb-6">
              <thead>
                <tr className="bg-[#d9e7f5] text-[#003875] font-bold">
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/2 text-center">
                    Parameters
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/2 text-center">
                    Remarks by Customer
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalTests.map((t, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs bg-white align-middle">
                      <input
                        type="text"
                        value={t.parameter}
                        onChange={(e) =>
                          handleAddTestChange(idx, "parameter", e.target.value)
                        }
                        className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                      />
                    </td>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs bg-white align-middle">
                      <input
                        type="text"
                        placeholder=""
                        value={t.remarks}
                        onChange={(e) =>
                          handleAddTestChange(idx, "remarks", e.target.value)
                        }
                        className="w-full text-gray-900 focus:outline-none bg-transparent"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right text-xs font-sans text-gray-400 pt-2">Page 2</div>
        </div>

        {/* ================= PAGE 3 ================= */}
        <div className="bg-white p-8 sm:p-12 shadow-2xl border border-gray-300 rounded-sm print:shadow-none print:border-none print:p-0 print:m-0 min-h-[1100px] flex flex-col justify-between">
          <div>
            {/* Testing Parameters Continued */}
            <div className="bg-[#003875] text-white font-bold text-center py-2.5 px-4 text-lg tracking-wide uppercase mb-1 border border-[#3875b4] rounded-xs">
              Testing Parameters
            </div>
            <table className="w-full border-separate border-spacing-1.5 text-sm mb-8">
              <thead>
                <tr className="bg-[#d9e7f5] text-[#003875] font-bold">
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/2 text-center">
                    Parameters
                  </th>
                  <th className="p-2.5 border border-[#3875b4] rounded-xs w-1/2 text-center">
                    Remarks by Customer
                  </th>
                </tr>
              </thead>
              <tbody>
                {testingParametersPage3.map((t, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs bg-white align-middle">
                      <input
                        type="text"
                        value={t.parameter}
                        onChange={(e) =>
                          handlePage3TestChange(idx, "parameter", e.target.value)
                        }
                        className="w-full font-bold text-[#003875] focus:outline-none bg-transparent"
                      />
                    </td>
                    <td className="p-2.5 border border-[#3875b4] rounded-xs bg-white align-middle">
                      <input
                        type="text"
                        placeholder=""
                        value={t.remarks}
                        onChange={(e) =>
                          handlePage3TestChange(idx, "remarks", e.target.value)
                        }
                        className="w-full text-gray-900 focus:outline-none bg-transparent"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Other Documents Section */}
            <div className="bg-[#003875] text-white font-bold text-center py-2.5 px-4 text-lg tracking-wide uppercase mb-4 border border-[#3875b4] rounded-xs">
              Other Documents
            </div>

            {/* Declarations */}
            <div className="mb-6">
              <p className="font-bold text-[#003875] text-base mb-3">
                Declarations : <span className="font-normal text-sm">Please tick (✓) the applicable declaration requirements.</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-4 text-sm font-bold text-[#003875]">
                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.tseBseFree}
                    onChange={() => toggleDeclaration("tseBseFree")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>TSE BSE Free</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.nonGmo}
                    onChange={() => toggleDeclaration("nonGmo")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Non GMO</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.freeFromAllergen}
                    onChange={() => toggleDeclaration("freeFromAllergen")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Free from Allergen</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.veganVegetarian}
                    onChange={() => toggleDeclaration("veganVegetarian")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Vegan / Vegetarian</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.melamineFree}
                    onChange={() => toggleDeclaration("melamineFree")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Melamine free</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.glutenFree}
                    onChange={() => toggleDeclaration("glutenFree")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Gluten free</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.chemicalSynthesis}
                    onChange={() => toggleDeclaration("chemicalSynthesis")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Chemical synthesis</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                  <input
                    type="checkbox"
                    checked={declarations.otherDocumentRequired}
                    onChange={() => toggleDeclaration("otherDocumentRequired")}
                    className="h-4 w-4 accent-[#003875] rounded-none border-gray-400"
                  />
                  <span>Other Document Required</span>
                </label>
              </div>
            </div>

            {/* Other Requirements & Remarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 text-sm">
              <div className="border border-[#3875b4] rounded-xs bg-white p-3 min-h-[110px] flex flex-col justify-start">
                <div className="font-bold text-[#003875] text-base mb-1">
                  Other Requirements
                </div>
                <textarea
                  rows={3}
                  value={otherRequirements}
                  onChange={(e) => setOtherRequirements(e.target.value)}
                  className="w-full text-gray-900 focus:outline-none bg-transparent resize-none font-serif"
                />
              </div>
              <div className="border border-[#3875b4] rounded-xs bg-white p-3 min-h-[110px] flex flex-col justify-start">
                <div className="font-bold text-[#003875] text-xs mb-1">
                  Remarks by customer
                </div>
                <textarea
                  rows={3}
                  value={otherRequirementsRemarks}
                  onChange={(e) => setOtherRequirementsRemarks(e.target.value)}
                  className="w-full text-gray-900 focus:outline-none bg-transparent resize-none font-serif"
                />
              </div>
            </div>

            {/* Customer Comments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-sm">
              <div className="border border-[#3875b4] rounded-xs bg-white p-3 min-h-[110px] flex flex-col justify-start">
                <div className="font-bold text-[#003875] text-base">
                  Customer Comments
                </div>
              </div>
              <div className="border border-[#3875b4] rounded-xs bg-white p-3 min-h-[110px] flex flex-col justify-start">
                <textarea
                  rows={3}
                  value={customerComments}
                  onChange={(e) => setCustomerComments(e.target.value)}
                  className="w-full text-gray-900 focus:outline-none bg-transparent resize-none font-serif"
                />
              </div>
            </div>
          </div>

          <div className="text-right text-xs font-sans text-gray-400 pt-2">Page 3</div>
        </div>

        {/* Bottom Submission Action Box */}
        <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans print:hidden">
          <div className="w-full sm:w-auto flex-1">
            <label className="block text-xs font-bold text-gray-800 mb-1">
              Your Email Address (For Submission Confirmation) *
            </label>
            <input
              type="email"
              placeholder="e.g. customer@company.com"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="w-full max-w-md p-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003875] bg-gray-50/50"
              required
            />
            <p className="text-[11px] text-gray-500 mt-1">
              Your email will be attached to the specification report sent directly to itzhimanshu3107@gmail.com and Aditya Chemicals.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isExpired}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#003875] hover:bg-[#002b55] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">
                  progress_activity
                </span>
                Submitting...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">send</span>
                Submit & Send Document via Email
              </>
            )}
          </button>
        </div>
      </form>

      {/* Generate Customer Link Modal */}
      {showGenModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 print:hidden font-sans">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2 text-[#003875]">
                <span className="material-symbols-outlined text-2xl">
                  qr_code_2
                </span>
                <h2 className="text-lg font-bold">
                  Generate Dedicated Customer Link
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowGenModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleGenerateLink} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Customer / Company Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Laboratories Inc."
                  value={genCustomerName}
                  onChange={(e) => setGenCustomerName(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003875] text-sm"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Link Expiration Duration
                </label>
                <select
                  value={genExpiryDays}
                  onChange={(e) => setGenExpiryDays(e.target.value)}
                  className="w-full p-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003875] bg-white text-sm"
                >
                  <option value="7">7 Days</option>
                  <option value="14">14 Days (Default)</option>
                  <option value="30">30 Days</option>
                  <option value="never">No Expiration</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#003875] hover:bg-[#002b55] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md text-sm"
                >
                  <span className="material-symbols-outlined text-base">
                    link
                  </span>
                  Generate Shareable Link
                </button>
              </div>
            </form>

            {generatedUrl && (
              <div className="mt-4 pt-4 border-t space-y-2 text-xs">
                <label className="block font-bold text-green-700">
                  Generated Shareable Link (Copy & Send to Customer):
                </label>
                <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl break-all text-[11px] font-mono text-[#003875]">
                  {generatedUrl}
                </div>
                <button
                  type="button"
                  onClick={handleCopyGeneratedUrl}
                  className="w-full py-2.5 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 text-xs shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">
                    content_copy
                  </span>
                  {genCopied ? "Link Copied to Clipboard!" : "Copy Link to Clipboard"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Success Confirmation Modal */}
      {submittedSuccess && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 print:hidden font-sans">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">
                check_circle
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Specification Sheet Emailed!
            </h2>

            <p className="text-sm text-gray-600">
              The 3-page specification document has been generated and sent to{" "}
              <strong className="text-gray-900">{customerEmail}</strong> and copied to Aditya Chemicals sales team.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setSubmittedSuccess(false)}
                className="w-full py-2.5 bg-[#003875] hover:bg-[#002b55] text-white font-bold text-sm rounded-xl transition-colors"
              >
                Close & View Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SpecificationLoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-200 py-12 flex items-center justify-center font-sans">
      <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-3 text-[#003875] font-bold text-sm">
        <span className="material-symbols-outlined animate-spin text-2xl">
          progress_activity
        </span>
        Loading Specification Sheet...
      </div>
    </div>
  );
}

export default function SpecificationSheetPage() {
  return (
    <Suspense fallback={<SpecificationLoadingFallback />}>
      <SpecificationSheetForm />
    </Suspense>
  );
}
