import Featured from "@/component/FeatuteBlogs";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import Technologies from "@/component/Technologies";
import Testimonial from "@/component/Testimonial";
import Service from "@/component/services";
import CenteredCircles from "@/component/services/new";

export default function Home() {
  const data = [
    {
      "id": 1,
      "name": "Web Development",
      "description": "Custom web application development using modern technologies.",
      "category": "Software Development",
      "price": 5000,
      "duration": "2 weeks"
    },
    {
      "id": 2,
      "name": "Graphic Design",
      "description": "Creative graphic design services for branding and marketing materials.",
      "category": "Design",
      "price": 1000,
      "duration": "1 week"
    },
    {
      "id": 3,
      "name": "Social Media Management",
      "description": "Effective management of social media accounts for increased brand visibility.",
      "category": "Digital Marketing",
      "price": 1200,
      "duration": "1 month"
    },
    {
      "id": 4,
      "name": "Mobile App Development",
      "description": "iOS and Android app development tailored to your business needs.",
      "category": "Software Development",
      "price": 8000,
      "duration": "3 weeks"
    },
    {
      "id": 5,
      "name": "SEO Optimization",
      "description": "Optimizing website content for search engines to improve online visibility.",
      "category": "Digital Marketing",
      "price": 1500,
      "duration": "2 weeks"
    },
    {
      "id": 6,
      "name": "Content Writing",
      "description": "High-quality content creation for websites, blogs, and marketing materials.",
      "category": "Content Creation",
      "price": 800,
      "duration": "1 week"
    },
    {
      "id": 7,
      "name": "IT Consulting",
      "description": "Expert advice and consultation on IT solutions for your business.",
      "category": "Consulting",
      "price": 2000,
      "duration": "1 month"
    },
    {
      "id": 8,
      "name": "E-commerce Development",
      "description": "Building secure and user-friendly e-commerce platforms for online businesses.",
      "category": "Software Development",
      "price": 6000,
      "duration": "4 weeks"
    }
  ]
  console.log('data', data)

  const feturedData = {
    heading1: "Main Heading",
    heading2: "Sub Heading",
    Cards: [
      {
        button_slug: "/button-link-1",
        button_name: "Button 1",
        image: {
          data: {
            attributes: {
              url: "https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FRecovery_db23ef16f6.webp&w=1920&q=75",
            },
          },
        },
        heading: "Card Heading 1",
        description: "Description for Card 1",
      },
      {
        button_slug: "/button-link-2",
        button_name: "Button 2",
        image: {
          data: {
            attributes: {
              url: "https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FRecovery_db23ef16f6.webp&w=1920&q=75",
            },
          },
        },
        heading: "Card Heading 2",
        description: "Description for Card 2",
      },
      {
        button_slug: "/button-link-1",
        button_name: "Button 1",
        image: {
          data: {
            attributes: {
              url: "https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FRecovery_db23ef16f6.webp&w=1920&q=75",
            },
          },
        },
        heading: "Card Heading 1",
        description: "Description for Card 1",
      },
      {
        button_slug: "/button-link-2",
        button_name: "Button 2",
        image: {
          data: {
            attributes: {
              url: "https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FRecovery_db23ef16f6.webp&w=1920&q=75",
            },
          },
        },
        heading: "Card Heading 2",
        description: "Description for Card 2",
      },
      {
        button_slug: "/button-link-1",
        button_name: "Button 1",
        image: {
          data: {
            attributes: {
              url: "https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FRecovery_db23ef16f6.webp&w=1920&q=75",
            },
          },
        },
        heading: "Card Heading 1",
        description: "Description for Card 1",
      },
      {
        button_slug: "/button-link-2",
        button_name: "Button 2",
        image: {
          data: {
            attributes: {
              url: "https://www.geminisolutions.com/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Fbeta.geminisolutions.com%2Fbeta.geminisolutions.com%2FRecovery_db23ef16f6.webp&w=1920&q=75",
            },
          },
        },
        heading: "Card Heading 2",
        description: "Description for Card 2",
      },
    ],
  };
  
  const sampleData = {
    heading: "Testimonials",
    description: "Check out what our clients are saying about us!",
    reviews: [
      {
        full_name: "John Doe 1",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profile_pic: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
        company_logo: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
      },
      {
        full_name: "John Doe 2",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profile_pic: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
        company_logo: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
      },
      {
        full_name: "John Doe 3",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profile_pic: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
        company_logo: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
      },
      {
        full_name: "John Doe 4",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profile_pic: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
        company_logo: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
      },
      {
        full_name: "John Doe 5",
        position: "CEO",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        profile_pic: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
        company_logo: { data: { attributes: { url: "https://picsum.photos/id/237/200/300" } } },
      },
      // Add more reviews as needed
    ],
  };  
  
  const technologiesSampleData = {
    heading1: "Sample Heading 1",
    heading2: "Sample Heading 2",
    cards: [
      {
        id: 1,
        name: "Technology A",
        slug: "/technology-a",
        icon: {
          data: [
            {
              attributes: {
                url: "path-to-technology-a-icon.svg",
              },
            },
          ],
        },
      },
      {
        id: 2,
        name: "Technology B",
        slug: "/technology-b",
        icon: {
          data: [
            {
              attributes: {
                url: "path-to-technology-b-icon.svg",
              },
            },
          ],
        },
      },
      {
        id: 1,
        name: "Technology A",
        slug: "/technology-a",
        icon: {
          data: [
            {
              attributes: {
                url: "path-to-technology-a-icon.svg",
              },
            },
          ],
        },
      },
      {
        id: 1,
        name: "Technology A",
        slug: "/technology-a",
        icon: {
          data: [
            {
              attributes: {
                url: "path-to-technology-a-icon.svg",
              },
            },
          ],
        },
      },
      {
        id: 2,
        name: "Technology B",
        slug: "/technology-b",
        icon: {
          data: [
            {
              attributes: {
                url: "path-to-technology-b-icon.svg",
              },
            },
          ],
        },
      },
      {
        id: 1,
        name: "Technology A",
        slug: "/technology-a",
        icon: {
          data: [
            {
              attributes: {
                url: "path-to-technology-a-icon.svg",
              },
            },
          ],
        },
      },
    ],
    RHS_image: {
      data: {
        attributes: {
          url: "path-to-rhs-image.jpg",
        },
      },
    },
  };
  


  return (
      <>
        <Navbar />
        <HeroSection />
        <CenteredCircles data={data}/>
        <Featured data={feturedData}/> 
        <Testimonial data={sampleData} />
        <Technologies data={technologiesSampleData}/>
      </>
  );
}
