import Container from "../container/Container";
import Image from "next/image";
import money_flow from "@assets/money-flow.png";
import digital_loan from "@assets/digital-loan.png";
import verify_account from "@assets/verify-account.png";

const Showcase = () => {
  return (
    <div className="space-y-14 pb-12">
      <Container>
        <h2 className="mt-20 text-left text-3xl font-bold tracking-wider md:text-center md:text-4xl md:leading-normal lg:text-5xl">
          Products & <br className="sm:hidden" /> Solutions
        </h2>
      </Container>
      <div>
        <Container className="z-10 grid grid-cols-1 items-center gap-12 lg:h-screen lg:max-h-[500px] lg:grid-cols-2 lg:gap-8">
          <div>
            <h4 className="text-stone text-base">
              FINANCIAL DATA & OPEN BANKING
            </h4>
            <p className="mt-2 text-2xl font-bold md:leading-normal lg:text-3xl">
              Comprehensive open banking solutions for effortless financial
              management
            </p>
            <p className="mt-6 text-fade">
              Providing cutting-edge solutions such as data aggregation,
              financial insight, and efficient account verification
            </p>
            <button className="mt-10 w-48 rounded bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/60 max-md:py-2">
              Get Started
            </button>
          </div>
          <div
            data-aos="fade-left"
            className="relative z-10 flex items-center justify-center"
          >
            <Image
              src={money_flow}
              alt="Money Flow"
              height={300}
              width={300}
              className="z-10 w-[95%] max-w-full object-contain lg:w-full"
            />
            {/* <div className="absolute left-[30%] top-[-40%] z-0 h-full max-h-[600px] w-screen -rotate-[25deg] transform rounded-full bg-primary/80 xl:left-[50%]"></div> */}
          </div>
        </Container>
      </div>
      <div>
        <Container className="z-10 grid grid-cols-1 items-center gap-12 lg:h-screen lg:max-h-[500px] lg:grid-cols-2 lg:gap-8">
          <div
            data-aos="fade-right"
            className="relative z-10 flex items-center justify-center max-lg:order-2"
          >
            <Image
              src={digital_loan}
              alt="Digital loan"
              height={300}
              width={300}
              className="z-10 w-[95%] max-w-full object-contain lg:w-full"
            />
            {/* <div className="absolute left-[30%] top-[-40%] z-0 h-full max-h-[600px] w-screen -rotate-[25deg] transform rounded-full bg-primary/80 xl:left-[50%]"></div> */}
          </div>
          <div className="max-lg:order-1">
            <h4 className="text-stone text-base">
              FULL CREDIT ASSESSMENT & INSURANCE
            </h4>
            <p className="mt-2 text-2xl font-bold md:leading-normal lg:text-3xl">
              Revolutionary lending process, from application through to funds
              distribution and recovery
            </p>
            <p className="mt-6 text-fade">
              Facilitating accurate credit evaluations and broadening credit
              opportunities for both borrowers and lenders
            </p>
            <button className="mt-10 w-48 rounded bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/60 max-md:py-2">
              Get Started
            </button>
          </div>
        </Container>
      </div>
      <div>
        <Container className="z-10 grid grid-cols-1 items-center gap-12 lg:h-screen lg:max-h-[500px] lg:grid-cols-2 lg:gap-8">
          <div>
            <h4 className="text-stone text-base">
              VERIFICATION, RISK MANAGEMENT & ISSUANCE
            </h4>
            <p className="mt-2 text-2xl font-bold md:leading-normal lg:text-3xl">
              Simplify account verification with single API integration
            </p>
            <p className="mt-6 text-fade">
              Equipping fintechs and enterprises with robust identity
              verification and risk assessment tools
            </p>
            <button className="mt-10 w-48 rounded bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary/60 max-md:py-2">
              Get Started
            </button>
          </div>
          <div
            data-aos="fade-left"
            className="relative z-10 flex items-center justify-center"
          >
            <Image
              src={verify_account}
              alt="Verify Account"
              height={300}
              width={300}
              className="z-10 w-[95%] max-w-full object-contain lg:w-full"
            />
            {/* <div className="absolute left-[30%] top-[-40%] z-0 h-full max-h-[600px] w-screen -rotate-[25deg] transform rounded-full bg-primary/80 xl:left-[50%]"></div> */}
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Showcase;
