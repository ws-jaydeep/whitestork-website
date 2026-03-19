import aiAuto from "@/public/images/services/AiAutoIcon.png";
import aiAgentDev from "@/public/images/services/AiAgentDevIcon.png";
import customChatBotDev from "@/public/images/services/customChatBotDev.png";
import workFlowAutom from "@/public/images/services/workflow.png";
import webAndMobileAppDev from "@/public/images/services/web_and _mobile.png";
import devOps from "@/public/images/services/devops.png";
import digiMart from "@/public/images/services/digital_marketing.png";

export const servicesNavBarCompDataArr = [
  {
    label: "AI Automation Service",
    icon: aiAuto,
    renderUi: "aiAuto",
  },
  {
    label: "AI Agent Development",
    icon: aiAgentDev,
    renderUi: "aiAgentDev",
  },
  {
    label: "Custom Chatbot Development",
    icon: customChatBotDev,
    renderUi: "customChatBotDev",
  },
  {
    label: "Work Flow Automation Service",
    icon: workFlowAutom,
    renderUi: "workFlowAutom",
  },
  {
    label: "Web And Mobile App Development",
    icon: webAndMobileAppDev,
    renderUi: "webAndMobileAppDev",
  },
  {
    label: "DevOps And Cloud Services",
    icon: devOps,
    renderUi: "devOps",
  },
  {
    label: "Digital Marketing",
    icon: digiMart,
    renderUi: "digiMart",
  },
] as const;

export const servicesSectionContent = {
  autoRotateMs: 10000,
  mobileSelectPlaceholder: "Select service",
} as const;

export const renderUiCompDataArr = [
  {
    uiName: "aiAuto",
    heading: "AI Automation Service",
    subHeading: "Transform your business with intelligent AI automation solutions",
    paragraph:
      "AI automation leverages cutting-edge artificial intelligence and machine learning technologies to streamline processes, boost efficiency, and reduce operational costs. With our expertise in designing tailored AI solutions, we help businesses automate repetitive tasks, gain real-time insights, and make smarter decisions faster.",
    rightImg: { src: "/images/services/AiAutoRightImg.png", width: 486, height: 486 },
    paraButtom:
      "Our automation solutions not only optimize current processes but also uncover new opportunities for innovation and scalability. By integrating AI into everyday operations, we enable organizations to stay agile, competitive, and prepared for the future of work.",
    servicesSection: [
      { lable: "Process Automation", icon: "/images/services/ProcessAuto.png" },
      { lable: "Predictive Analysis", icon: "/images/services/pred.png" },
      { lable: "Conversational AI & Chatbots", icon: "/images/services/chatbot.png" },
      { lable: "Business Intelligence Automation", icon: "/images/services/business_intelligence_image.png" },
      { lable: "Integration with Existing Tools", icon: "/images/services/integration_image.png" },
    ],
  },
  {
    uiName: "aiAgentDev",
    heading: "AI Agent Development",
    subHeading: "Build intelligent AI agents that work smarter for your business",
    paragraph:
      "Empower your business with intelligent AI agents that work like digital teammates. AI agents are transforming the way businesses operate by performing complex tasks, making decisions, and interacting with users in real-time. With our expertise in advanced AI models and automation frameworks, we design and develop custom AI agents tailored to your business needs, helping you scale faster, improve efficiency, and deliver better user experiences.",
    rightImg: { src: "/images/services/ai-agent-service.png", width: 394, height: 353 },
    paraButtom:
      "Our AI agents can streamline workflows, enhance customer support, and adapt dynamically to evolving business challenges. By integrating AI-driven intelligence into your operations, we enable smarter, faster, and more reliable outcomes for sustainable growth.",
    servicesSection: [
      { lable: "Conversational Agents", icon: "/images/services/talk_image.png" },
      { lable: "Task Oriented Agents", icon: "/images/services/settings_image.png" },
      { lable: "Decision Making Agents", icon: "/images/services/decision-making_image.png" },
      { lable: "Integration Agents", icon: "/images/services/connectivity_image.png" },
      { lable: "Learning Agents", icon: "/images/services/knowledge_image.png" },
    ],
  },
  {
    uiName: "customChatBotDev",
    heading: "Custom Chatbot Development",
    subHeading: "Engage your customers with intelligent, personalized chatbots",
    paragraph:
      "Reimagine customer engagement with intelligent, conversational AI. Custom chatbots empower businesses to deliver instant, 24/7 support, streamline communication, and enhance customer experiences. With our expertise in AI, NLP, and automation, we build chatbots tailored to your unique business needs, whether it is customer support, lead generation, e-commerce assistance, or internal team collaboration.",
    rightImg: { src: "/images/services/ai-chatboat-service.png", width: 479, height: 314 },
    paraButtom:
      "Our chatbots are designed to understand natural language, provide accurate responses, and continuously learn from interactions. By integrating across multiple channels, including web, mobile, and messaging apps, we ensure seamless customer experiences that save time, reduce costs, and boost satisfaction.",
    servicesSection: [
      { lable: "Customer Support Bots", icon: "/images/services/human_image_cc.png" },
      { lable: "E-Commerce Bots", icon: "/images/services/shop-assistant_image.png" },
      { lable: "Lead Generation Bots", icon: "/images/services/target-person_image.png" },
      { lable: "Internal Process Bots", icon: "/images/services/process_w-f-a.png" },
      { lable: "Multichannel Integration", icon: "/images/services/flexibility_wfa.png" },
    ],
  },
  {
    uiName: "workFlowAutom",
    heading: "Work Flow Automation Services",
    subHeading: "Streamline your business processes with smart workflow automation",
    paragraph:
      "Our workflow automation solutions are built to simplify complex processes, reduce manual effort, and accelerate business operations. Designed to handle repetitive tasks with precision, they ensure consistency, accuracy, and speed across every department. By integrating seamlessly with your existing tools and platforms, we help businesses eliminate bottlenecks, save valuable time, and improve overall efficiency.",
    rightImg: { src: "/images/services/ai-workflow-service.png", width: 402, height: 420 },
    paraButtom:
      "With end-to-end automation in place, your teams can focus on strategic initiatives while routine operations are executed effortlessly in the background, driving productivity, reducing costs, and ensuring scalable growth.",
    servicesSection: [
      { lable: "Business Process Automation", icon: "/images/services/management_wfa.png" },
      { lable: "End-to-End Task Automation", icon: "/images/services/order-processed_wfa.png" },
      { lable: "Data Integration & Processing", icon: "/images/services/data-management_wfa.png" },
      { lable: "Employee Productivity Tools", icon: "/images/services/human_image_cc.png" },
      { lable: "Customer Journey Automation", icon: "/images/services/connectivity_image.png" },
    ],
  },
  {
    uiName: "webAndMobileAppDev",
    heading: "Web App & Mobile Application Development",
    subHeading:
      "Web applications mark your presence while mobile apps turn ideas into everyday experiences",
    paragraph:
      "Unlock the full potential of your business with our custom web and mobile app development services. From ideation and design to development and deployment, we manage every stage with precision and creativity. Our solutions are built to be scalable, secure, and user-friendly, ensuring your business stays connected with its audience anytime, anywhere.",
    rightImg: { src: "/images/services/ai-web-mobile-service.png", width: 600, height: 350 },
    paraButtom:
      "From concept to launch, we deliver seamless, engaging digital experiences that work flawlessly across devices. Whether it is a responsive web platform or a feature-rich mobile application, we empower your brand to reach, engage, and grow with confidence.",
    servicesSection: [
      { lable: "Android App Development", icon: "/images/services/andoridimg.png" },
      { lable: "iOS App Development", icon: "/images/services/iosapp.png" },
      { lable: "Cross-Platform App Development with Flutter", icon: "/images/services/flutter.png" },
      { lable: "App Support & Maintenance", icon: "/images/services/Smartphone_Maintenance.svg" },
      { lable: "HTML", icon: "/images/services/html.svg" },
      { lable: "CSS", icon: "/images/services/css.svg" },
      { lable: "Node JS", icon: "/images/services/node.svg" },
      { lable: "React", icon: "/images/services/react.svg" },
      { lable: "Next JS", icon: "/images/services/next.svg" },
    ],
  },
  {
    uiName: "devOps",
    heading: "DevOps & Cloud Services",
    subHeading:
      "Transforming businesses with seamless DevOps and cloud solutions for limitless innovation",
    paragraph:
      "DevOps and cloud solutions are the backbone of modern software development and deployment. Our expert team designs and manages efficient DevOps pipelines that enable continuous integration and delivery, ensuring faster and more reliable releases. By leveraging cutting-edge tools and cloud platforms, we automate infrastructure provisioning, configuration management, and deployment to streamline your operations.",
    rightImg: { src: "/images/services/ai-devops-service.png", width: 513, height: 513 },
    paraButtom:
      "With our DevOps and cloud services, businesses gain the agility to scale effortlessly, reduce operational costs, and improve software quality. We help you achieve faster time-to-market while ensuring secure, resilient, and cost-effective infrastructure management.",
    servicesSection: [
      { lable: "AWS", icon: "/images/services/awslogo.svg" },
      { lable: "Serverless", icon: "/images/services/serverlesslogo.svg" },
      { lable: "Terraform", icon: "/images/services/terraform-Photoroom.svg" },
      { lable: "GitHub Actions", icon: "/images/services/githubactions.svg" },
      { lable: "Drone", icon: "/images/services/drone.svg" },
      { lable: "Jenkins", icon: "/images/services/Jenkins_logo.svg" },
      { lable: "Cloud Formation", icon: "/images/services/AiImageEnhancer.svg" },
    ],
  },
  {
    uiName: "digiMart",
    heading: "Digital Marketing",
    subHeading: "Elevate your digital presence with strategic digital marketing activities",
    paragraph:
      "Digital marketing harnesses the power of online platforms and modern technologies to promote brands, products, and services effectively. With our expertise in crafting tailored strategies that align with your business goals, we help elevate your digital presence and drive measurable growth. Our approach ensures stronger visibility, deeper engagement, and long-term success for your brand.",
    rightImg: { src: "/images/services/ai-digital-service.png", width: 497, height: 376 },
    paraButtom:
      "Our team excels in SEO, SEM, SMM, SMO, PPC, paid ads, and organic marketing to connect your brand with the right audience. By blending creativity with data-driven insights, we craft campaigns that drive visibility, engagement, and conversions.",
    servicesSection: [
      { lable: "SEO", icon: "/images/services/seo.svg" },
      { lable: "SEM", icon: "/images/services/sem.svg" },
      { lable: "Social Media Marketing", icon: "/images/services/digital-campaign.svg" },
      { lable: "Social Media Optimization", icon: "/images/services/content.svg" },
    ],
  },
] as const;
