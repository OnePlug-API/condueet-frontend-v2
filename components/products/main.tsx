import Image from "next/image";
import Container from "../container";
import { MotionDiv } from "../motion";
import money_flow from "@assets/money-flow.png";
import digital_loan from "@assets/digital-loan.png";
import verify_account from "@assets/verify-account.png";
import Accordion from "../shared/accordion";
import {
  creditAssessment,
  financialData,
  verificationServices,
} from "@/lib/constants";

const ProductsSolutions = () => {
  return (
    <div className="space-y-14 pb-12">
      <Container className="z-10 mt-10 grid grid-cols-1 items-center gap-12 lg:h-screen lg:max-h-[500px] lg:grid-cols-[1.25fr_1.75fr] lg:gap-8">
        <div>
          <Accordion data={financialData} />
        </div>
        <MotionDiv
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.75 }}
          className="relative z-10 flex items-center justify-center"
        >
          <Image
            src={money_flow}
            alt="Money Flow"
            height={300}
            width={300}
            className="z-10 w-[95%] max-w-md object-contain lg:w-full"
          />
        </MotionDiv>
      </Container>
      <Container className="z-10 grid grid-cols-1 items-center gap-12 lg:h-screen lg:max-h-[500px] lg:grid-cols-[1.75fr_1.25fr] lg:gap-8">
        <div className="lg:order-2">
          <Accordion data={creditAssessment} />
        </div>
        <MotionDiv
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.75 }}
          className="relative z-10 flex items-center justify-center lg:order-1"
        >
          <Image
            src={digital_loan}
            alt="Credit Assessment"
            height={300}
            width={300}
            className="z-10 w-[95%] max-w-md object-contain lg:w-full"
          />
        </MotionDiv>
      </Container>
      <Container className="z-10 grid grid-cols-1 items-center gap-12 lg:h-screen lg:max-h-[500px] lg:grid-cols-[1.25fr_1.75fr] lg:gap-8">
        <div>
          <Accordion data={verificationServices} />
        </div>
        <MotionDiv
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.75 }}
          className="relative z-10 flex items-center justify-center"
        >
          <Image
            src={verify_account}
            alt="Verification"
            height={300}
            width={300}
            className="z-10 w-[95%] max-w-md object-contain lg:w-full"
          />
        </MotionDiv>
      </Container>
    </div>
  );
};
export default ProductsSolutions;
