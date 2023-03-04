import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const icons = {
	faTwitter,
  faGithub,
  faLinkedin
};

interface IconProps
	extends Pick<FontAwesomeIconProps, "size" | "color" | "fixedWidth"> {
	icon: keyof typeof icons;
}

export function Icon({ icon, fixedWidth = true, ...rest }: IconProps) {
	return (
		<FontAwesomeIcon icon={icons[icon]} fixedWidth={fixedWidth} {...rest} />
	);
}
