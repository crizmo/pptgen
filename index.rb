# Install the 'pptx' gem first
# gem install pptx

require 'pptx'

content = [
    {
        slideTitle: "Introduction",
        slideText: "Google Cloud Platform (GCP) has emerged as a leading provider of cloud computing services, revolutionizing the way businesses operate and driving digital transformation across industries. This presentation highlights how XYZ Corporation, a global technology company specializing in e-commerce solutions, leveraged GCP to achieve their strategic objectives.",
        imagePath: "./assets/google-cloud-platform2.jpg"
    },
    {
        slideTitle: "Background",
        slideText: "XYZ Corporation is a global technology company at the forefront of the e-commerce industry. With a strong focus on innovation and customer-centric solutions, XYZ Corporation recognized the need to enhance their e-commerce platform's scalability, data security, operational efficiency, and analytics capabilities.",
        imagePath: ""
    },
    {
        slideTitle: "Objectives",
        slideText: "To drive their digital transformation, XYZ Corporation set the following objectives:\n\n1. Enhance scalability and performance of their e-commerce platform.\n2. Improve data security and compliance with regulatory requirements.\n3. Increase operational efficiency and reduce infrastructure costs.\n4. Leverage advanced data analytics and machine learning capabilities to gain valuable insights and improve customer experience.",
        imagePath: ""
    },
    {
        slideTitle: "Solution Implementation",
        slideText: "a. Infrastructure Migration:\n\nTo ensure a smooth transition to GCP, XYZ Corporation partnered with a Google Cloud Premier Partner. Together, they meticulously planned and executed the migration of XYZ Corporation's infrastructure to GCP, minimizing disruptions and optimizing resource allocation.",
        imagePath: ""
    },
    {
        slideTitle: "Solution Implementation (cont'd)",
        slideText: "b. Scalable Architecture:\n\nLeveraging GCP's robust infrastructure, XYZ Corporation adopted a microservices architecture. This architecture enabled them to enhance scalability, handle increased user traffic, and improve application performance, ensuring a seamless user experience.",
        imagePath: ""
    },
    {
        slideTitle: "Solution Implementation (cont'd)",
        slideText: "c. Data Security and Compliance:\n\nGCP's comprehensive security features, including robust identity and access management (IAM) and data encryption capabilities, empowered XYZ Corporation to enhance their data security posture. By complying with regulatory requirements and protecting sensitive customer data, XYZ Corporation gained the trust of their customers.",
        imagePath: ""
    },
    {
        slideTitle: "Solution Implementation (cont'd)",
        slideText: "d. Cost Optimization:\n\nBy migrating to GCP, XYZ Corporation significantly reduced their infrastructure costs. They leveraged GCP's cost-effective pricing model and optimized resource allocation, resulting in substantial cost savings while maintaining high performance and reliability.",
        imagePath: ""
    },
    {
        slideTitle: "Solution Implementation (cont'd)",
        slideText: "e. Advanced Analytics and Machine Learning:\n\nXYZ Corporation harnessed GCP's advanced data analytics and machine learning capabilities. By leveraging powerful data processing tools and AI algorithms, they gained valuable insights, enabling data-driven decision-making and improving customer experience.",
        imagePath: ""
    },
    {
        slideTitle: "Results and Benefits",
        slideText: "a. Enhanced Scalability:\n\nWith GCP's scalable infrastructure, XYZ Corporation achieved seamless scalability. They were able to handle increased user traffic, accommodate growth, and ensure optimal application performance, resulting in improved customer satisfaction and retention.",
        imagePath: ""
    },
    {
        slideTitle: "Results and Benefits (cont'd)",
        slideText: "b. Improved Data Security:\n\nGCP's robust security features ensured the protection of XYZ Corporation's data. By implementing stringent access controls, encryption mechanisms, and comprehensive security measures, XYZ Corporation met regulatory compliance requirements, mitigated security risks, and built a secure environment for their customers.",
        imagePath: ""
    },
    {
        slideTitle: "Results and Benefits (cont'd)",
        slideText: "c. Cost Savings:\n\nThrough infrastructure optimization and efficient resource utilization, XYZ Corporation achieved significant cost savings. GCP's cost-effective pricing model and the ability to scale resources as needed allowed them to streamline their operations, reduce infrastructure costs, and allocate resources more efficiently.",
        imagePath: ""
    },
    {
        slideTitle: "Results and Benefits (cont'd)",
        slideText: "d. Advanced Insights:\n\nLeveraging GCP's data analytics and machine learning capabilities, XYZ Corporation gained valuable insights from their data. By analyzing large datasets and applying sophisticated algorithms, they made data-driven decisions, identified trends, and improved their understanding of customer preferences, leading to personalized experiences and enhanced customer satisfaction.",
        imagePath: ""
    },
    {
        slideTitle: "Results and Benefits (cont'd)",
        slideText: "e. Streamlined Operations:\n\nGCP's managed services and automation capabilities reduced the administrative burden on XYZ Corporation. With streamlined operations, they could focus more on core business activities and innovation, accelerating their time-to-market and improving overall efficiency.",
        imagePath: ""
    },
    {
        slideTitle: "Conclusion",
        slideText: "The successful implementation of Google Cloud Platform by XYZ Corporation demonstrates the transformative potential of GCP in driving digital innovation, scalability, and efficiency. By leveraging GCP's comprehensive suite of services, XYZ Corporation achieved their strategic objectives, enhanced their e-commerce platform, and positioned themselves for continued success in a rapidly evolving digital landscape.",
        imagePath: ""
    }
];

ppt = PPTX::Presentation.new
ppt.title = "Driving Digital Transformation with Google Cloud Platform"
ppt.layout = 'LAYOUT_WIDE'

# Set default styles for text
default_text_options = { font_face: 'Arial', font_size: 18, color: 'ffffff' }

content.each do |item|
  slide = ppt.add_slide

  # Calculate text position based on the index
  is_left_aligned = (content.index(item) / 2).even?
  text_x = is_left_aligned ? 0.6 : 6.6
  text_y = 1.4

  # Add slide title
  slide.add_text item[:slideTitle], x: text_x, y: 0.6, w: 9.3, h: 0.7, **default_text_options, bold: true, font_size: 28

  # Add slide text
  slide.add_text item[:slideText], x: text_x, y: text_y, w: 5.7, h: 4, **default_text_options, font_size: 18

  # Check if an image is provided
  if item[:imagePath]
    # Calculate the image position
    image_x = is_left_aligned ? 6.6 : 0.6
    image_y = 2
    image_width = 6
    image_height = 3

    # Add the image
    slide.add_image item[:imagePath], x: image_x, y: image_y, w: image_width, h: image_height
  end
end

# Randomly select a background image from a directory
background_images_dir = './assets/backgrounds'
background_images = Dir.glob(File.join(background_images_dir, '*'))
random_background_image = background_images.sample

# Set the background image for each slide
ppt.slides.each do |slide|
  slide.background_image = random_background_image
end

# Save the presentation
ppt.save('digital_transformation.pptx')
