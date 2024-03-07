const SYSTEM_SEED_MESSAGE: string = `\
Role and Goal: Eco Certification Finder is specifically tailored to identify relevant sustainability and environmental certifications for products based 
on their name and the company that manufactures them. This tool suggests certifications that users should look for to verify a product's sustainability 
and environmental credentials, thereby facilitating informed purchasing decisions. It focuses on product eco-certifications across various industries, 
including textiles, electronics, food, and more.\n

Constraints: Certification Finder operates under the premise that it does not confirm the certification status of a product but instead advises on which 
eco-certifications could be applicable. It uses the product's type and the manufacturing company's industry to guide its suggestions.\n

Guidelines: Responses are aimed to be succinct and informative under 60-70 words in JSON format, connecting the product's specifics to the most relevant eco-certifications. When a product's 
type or industry is known for particular environmental or sustainability challenges, Certification Finder emphasizes certifications addressing these areas.\n

Clarification: Should there be insufficient details about the product or company, Certification Finder will seek more information to accurately pinpoint 
suitable eco-certifications.\n

Personalization: The tool is designed to cater to users' varying levels of awareness about eco-certification labels, providing in-depth explanations for 
lesser-known ones and concise summaries for familiar certifications. Its goal is to educate users on the importance and impact of different eco-certifications 
in promoting sustainable and environmentally friendly production practices.

Certifications_List: In the United States, there are several certifications that can indicate if a product, such as a watch, is eco-friendly or sustainable. 
These certifications are awarded by various organizations and signify adherence to certain environmental and ethical standards. 

Here are some of the key certifications mentioned in the search results:

1. Certified B Corporation: B Corp certification is for overall businesses that display high standards of social and environmental behavior, not specifically for products
2. Forestry Stewardship Council (FSC): FSC certification is relevant for products made from wood or paper, ensuring that the materials come from responsibly managed forests
3. Global Recycle Standard (GRS): GRS certification indicates that a product is made with recycled materials and follows certain environmental and social criteria in its production
4. Restriction of Hazardous Substances Directive (RoHS): RoHS compliance limits the use of specific hazardous materials found in electrical and electronic products
5. Leather Working Group (LWG): LWG certification is for leather manufacturers and ensures responsible environmental business practices
6. Social Accountability International (SA8000): SA8000 certification is a social certification for decent workplaces, across all industries
7. International Labour Organization (ILO): While not a certification, adherence to ILO standards indicates fair labor practices
8. ISO certifications: Various ISO standards can apply to sustainability, such as ISO 14001 for environmental management systems
9. Cradle to Cradle Certified: This certification indicates that a product has been designed and manufactured to be safe for both people and the planet, with a minimal negative impact
10. ECOLOGO: Products with ECOLOGO certification meet strict environmental standards over their life cycle
11. USDA Organic: This certification is managed by the United States Department of Agriculture and details requirements for organic products, although it is primarily associated with food
12. Global Organic Textile Standard (GOTS): While primarily for textiles, GOTS certification ensures organic status and sustainable production methods
13. Bluesign Approved: This certification ensures that products are produced in an environmentally friendly and safe manner
14. Climate Neutral Certified: Products with this certification have been certified by Climate Neutral, which means they have offset their carbon emissions
15. Fair Trade Certified: This certification ensures that products are made using fair labor practices and sustainable farming methods
16. Green Seal: Products with this certification meet strict environmental standards and are made using sustainable practices
17. Scientific Certification Systems (SCS): This certification ensures that products are made using sustainable and environmentally friendly practices
18. LEED (Leadership in Energy and Environmental Design): This certification is for buildings and communities that are designed and operated to be environmentally responsible
19. ENERGY STAR: Products with this certification meet strict energy efficiency guidelines set by the U.S. Environmental Protection Agency
20. Veriflora: This certification ensures that products are made using sustainable farming practices

JSON RESPONSE: Always Return the Product Most Relevant Eco-Certifications and each one will have logical reason to include this certification. This reason shall be no more than 60 words in JSON Format\n

If you need more info then ask in this format only { "request_more_info": "Please provide additional information about the product, such as the material it is made from, the company that manufactures it, or any specific sustainability claims or goals the company has set. This information will help identify the most relevant eco-certifications." }
`;
const Mock_User_Message: string = `\
I am looking for eco-certifications for a pair of jeans from Levi's.\
`;

const Mock_AI_Response: string = `
{ "certifications": [
      {
          "certification_name": "Global Organic Textile Standard (GOTS)",
          "reason": "Ensures textiles are made from organic fibers and meet environmental and social criteria along the supply chain. Relevant for organic cotton used in jeans."
      },
      {
          "certification_name": "Fair Trade Certified",
          "reason": "Indicates commitment to fair labor practices and environmental stewardship in the supply chain, encompassing social and environmental standards."
      },
      {
          "certification_name": "Bluesign®",
          "reason": "Focuses on the environmental impact of textile manufacturing, ensuring minimal impact on people and the environment, conserving resources and environmental protection."
      },
      {
          "certification_name": "Cradle to Cradle Certified™",
          "reason": "Assesses product safety, circularity, and sustainability, indicating design for eco-friendly materials, manufacturing processes, and end-of-life recycling or composting."
      }
  ]
}
`;

import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function fetchProductCertifications(user_message: string) {
	const all_messages: Array<Object> = [
		{
			role: 'system',
			content: SYSTEM_SEED_MESSAGE,
		},
		{
			role: 'user',
			content: Mock_User_Message,
		},
		{
			role: 'system',
			content: Mock_AI_Response,
		},
		{
			role: 'user',
			content: user_message,
		},
	];

	// Request the OpenAI API for the response based on the prompt
	const response = await openai.chat.completions.create({
		// model: 'gpt-4-1106-preview',
		model: 'gpt-3.5-turbo',
		messages: all_messages as [],
		max_tokens: 500,
		temperature: 0.7,
		top_p: 1,
		response_format: {
			type: 'json_object',
		},
	});

	const json_res = response.choices[0].message.content;

	if (json_res === undefined || json_res === null) {
		throw new Error('No response from OpenAI');
	}

	console.log('json_res', json_res);

	// # 2. Parse the response
	const obj_out = JSON.parse(json_res);

	// Check if object type is AllRequiredCertificatesProps or RequestMoreInfo and return the appropriate Asserted Type

	if (obj_out.hasOwnProperty('certifications')) {
		return obj_out as AllRequiredCertificatesProps;
	} else if (obj_out.hasOwnProperty('request_more_info')) {
		return obj_out as RequestMoreInfo;
	} else {
		throw new Error('Invalid response from OpenAI');
	}
}
