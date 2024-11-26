interface PropPDF {
    base64: string
    file_name: string
}

export default function DownloadPdf(props: PropPDF) {
    const pdfBlobUrl = (base64: string) => {
        const byteCharacters = atob(base64) // Decode Base64
        const byteNumbers = Array.from(byteCharacters, (char) =>
            char.charCodeAt(0),
        )
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: "application/pdf" })
        return URL.createObjectURL(blob)
    }

    return (
        <a
            href={pdfBlobUrl(props.base64)}
            download={props.file_name}
            class="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
        >
            Download PDF
        </a>
    )
}
