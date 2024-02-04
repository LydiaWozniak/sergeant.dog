import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

const icons = {
  faTwitter,
  faGithub,
  faLinkedin,
};

interface IconProps extends Pick<FontAwesomeIconProps, "size"> {
  icon: keyof typeof icons;
}

export function Icon({ icon, ...rest }: IconProps) {
  return <FontAwesomeIcon icon={icons[icon]} {...rest} />;
}
