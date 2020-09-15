import React from "react";
import ContactContainer from "./style/ContactContainer";
import { FlexContainerContact } from "../../../Shared/Wrappers";
import TextWrapper, { Header, Paragraph, Link} from "../../../Shared/Typography";

const ContactSection = ({ id }) =>{
	return(
		<ContactContainer id={id}>
			<FlexContainerContact>
				<TextWrapper textAlign="left">
						<Header primary> Personal Info.</Header>
						<Paragraph fontColor="white">Najm El-Deen Marwan Nabhani</Paragraph>
						<Paragraph fontColor="white"><Link target="_blank" href="mailto:najm.nabhani@gmail.com">najm.nabhani@gmail.com</Link></Paragraph>
						<Paragraph fontColor="white">Swefieh Bakhit Al-Issa St. Amman, Jordan</Paragraph>
				</TextWrapper>

				<TextWrapper textAlign="left">
						<Header primary> Social Media </Header>
						<Paragraph fontColor="white"> <Link target="_blank" href="https://www.linkedin.com/in/najm-nabhani/">LinkedIn.com</Link></Paragraph>
						<Paragraph fontColor="white"> <Link target="_blank" href="https://web.facebook.com/MrN.Nabhani">Facebook</Link></Paragraph>
						<Paragraph fontColor="white"> <Link target="_blank" href="https://www.instagram.com/mrn_nabhani/">Instagram</Link></Paragraph>
				</TextWrapper>

				<TextWrapper textAlign="left">
						<Header primary> Other Links </Header>
						<Paragraph fontColor="white"> <Link target="_blank" href="https://github.com/MrN-Nabhani">GitHub.com</Link></Paragraph>
						<Paragraph fontColor="white"> <Link target="_blank" href="https://codeforces.com/profile/Mr.N_Nabhani">Codeforces.com</Link></Paragraph>
				</TextWrapper>

			</FlexContainerContact>
		</ContactContainer>
	)
}


export default ContactSection;