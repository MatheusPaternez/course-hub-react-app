import IconJs from "../components/icons/JsBlue"
import IconPython from "../components/icons/PythonBlue"
import IconUxui from "../components/icons/UxuiBlue"
import IconHtml from "../components/icons/HtmlBlue"
import IconJava from "../components/icons/JavaBlue"
import IconCyber from "../components/icons/CyberBlue"
export default function IconRenderer ({ iconName }) {

  const IconMap = {
  html:IconHtml,
  js: IconJs,
  python: IconPython,
  uxui: IconUxui,
  java:IconJava,
  cyber:IconCyber
};
  //get icon from map
  const IconComponent = IconMap[iconName.toLowerCase()] || IconHtml;

  
  return (
    <div className="icon-wrapper w-12 col-start-1 row-span-2 mb-6">
      <IconComponent />
    </div>
  );
};