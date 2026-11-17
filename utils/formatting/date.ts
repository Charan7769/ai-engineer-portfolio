export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
}

export function formatPeriod(start: string, end: string | "Present"): string {
    return `${formatDate(start)} — ${end === "Present" ? "Present" : formatDate(end)}`;
}
export default formatDate;
