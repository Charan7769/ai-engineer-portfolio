import { Certificate } from "@/types";

/**
 * Only credentials that are supported by documentation on file are listed.
 * `credentialUrl` is set only where the URL resolves to the actual credential
 * record; generic provider homepages are deliberately omitted.
 */
export const certificatesData: Certificate[] = [
  {
    id: "cert2",
    title: "MongoDB Associate Developer Learning Path",
    issuer: "MongoDB",
    date: "2026-05-16",
    status: "Completed",
    note: "Completed learning path. No public credential record could be verified, so this is listed as a learning path rather than a certification.",
  },
];

/**
 * Withheld from the public page until evidence supports the claim.
 *
 * - GitHub Foundations: the only document on file is a DataCamp GitHub course
 *   PDF, not a GitHub-issued Foundations credential.
 * - ServiceNow Certified System Administrator (CSA): the only document on file
 *   is a "Welcome to ServiceNow" micro-certification, not a CSA credential.
 */
export const withheldCertificates: Certificate[] = [
  {
    id: "cert1",
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2026-07-01",
    status: "Completed",
  },
  {
    id: "cert3",
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "2025-10-08",
    status: "Completed",
  },
];

export const completedCertificates = certificatesData.filter((cert) => cert.status === "Completed");
export const inProgressCertificates = certificatesData.filter((cert) => cert.status === "In Progress");

export default certificatesData;
