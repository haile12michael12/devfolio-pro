import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEOHead({ 
  title, 
  description, 
  image = "",
  url = ""
}: SEOHeadProps) {
  const fullTitle = title.includes("Alex Rivera") ? title : `${title} | Alex Rivera`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    if (image) updateMeta("og:image", image, true);
    if (url) updateMeta("og:url", url, true);
    
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    if (image) updateMeta("twitter:image", image);

  }, [fullTitle, description, image, url]);

  return null;
}
