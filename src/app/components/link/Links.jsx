import "./Links.css"

const Links = ({ link, text }) => {
  return (
    <li className="single-link">
      <a href={link}>
        <span>{text}</span>
      </a>
    </li>
  );
};

export default Links;
