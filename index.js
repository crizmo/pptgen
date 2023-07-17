const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const title = "Driving Digital Transformation with Google Cloud Platform";
const content = [
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

const ppt = new pptxgen();
ppt.title = title;
ppt.layout = "LAYOUT_WIDE";

// Set default styles for text
const defaultTextOptions = { fontFace: "Arial", fontSize: 18, color: "ffffff" };

content.forEach((item, index) => {
  const slide = ppt.addSlide();

  // Calculate text position based on the index
  const isLeftAligned = Math.floor(index / 2) % 2 === 0;
  const textX = isLeftAligned ? 0.6 : 6.6;
  const textY = 1.4;

  // Add slide title
  slide.addText(item.slideTitle, {
    x: textX,
    y: 0.6,
    w: 9.3,
    h: 0.7,
    ...defaultTextOptions,
    bold: true,
    fontSize: 28,
  });

  // Add slide text
  slide.addText(item.slideText, {
    x: textX,
    y: textY,
    w: 5.7, // Adjust the text width as needed
    h: 4,
    ...defaultTextOptions,
    fontSize: 18,
  });

  // Check if an image is provided
  if (item.imagePath) {
    // Calculate the image position
    const imageX = isLeftAligned ? 6.6 : 0.6;
    const imageY = 2;
    const imageWidth = 6;
    const imageHeight = 3;

    // Add the image
    slide.addImage({
      path: item.imagePath,
      x: imageX,
      y: imageY,
      w: imageWidth,
      h: imageHeight,
    });
  }
});

// Randomly select a background image from a directory
const backgroundImagesDir = "./assets/backgrounds";
const backgroundImages = fs.readdirSync(backgroundImagesDir).map((file) =>
  path.join(backgroundImagesDir, file)
);
const randomBackgroundImage =
  backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

// Set the background image for each slide
ppt.slides.forEach((slide) => {
  slide.background = { path: randomBackgroundImage, sizing: { type: "cover" } };
});

// Save the presentation
ppt.writeFile("digital_transformation.pptx");
