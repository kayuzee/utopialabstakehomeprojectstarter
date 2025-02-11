import { AccountButton } from '../components/account/AccountButton'
import { Container, MainContent, Section, SectionRow } from './shared/headings'
import { SendEthForm } from './account/SendEthForm'
import { Title } from './shared/typography'



const SendTransaction: React.FC = () => {
  //implement logic to display address of logged in wallet
  //implement logic to display eth balance of logged in wallet
  //implement logic to take in an input of a wallet address and state to hold it
  //implement logic to take in an input of a amount to send and state to hold it
  //implement logic for the button to send a transaction with the current values of the wallet
  //address state and the amount state
  const handleClick = () => {};

  return (
    <MainContent>
    <Container>
      <Section>
        <SectionRow>
          <Title>Send Ether</Title>
          <AccountButton />
        </SectionRow>
        <SendEthForm />
      </Section>
    </Container>
  </MainContent>
  );
};

export default SendTransaction;
