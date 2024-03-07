

export async function verifyProductCertifications({certifications, company_name, manufacturing_materials, product_title}: VerifyProductCertificationProps) {
    
    const INPUT = `Product: ${product_title}\nCompany: ${company_name}\nCertifications: ${JSON.stringify(certifications)}\nMaterials: ${JSON.stringify(manufacturing_materials)}`

    // log type of input
    console.log(typeof INPUT)
    console.log(typeof JSON.stringify(INPUT))

    // Fetch from /ai_search Microservice URL
    const data = await fetch(`${process.env.SEARCH_ENGINE_MICROSERVICE_URL}/ai-search?prompt=${JSON.stringify(INPUT)}`, {
        cache: "no-cache"
      })

    const res = await data.json()

    return res.output
}