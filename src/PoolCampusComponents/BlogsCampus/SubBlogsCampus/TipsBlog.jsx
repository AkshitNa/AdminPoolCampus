import SubBlog from "./SubBlog";
import Blog01X from "../../../assets/BlogCampus/SubBlogs/SubBlogsCampus01.png"

export const TipsBlog = () => {
  return (
    <>
    <div className="font-lato">

        <p className="text-5xl font-semibold pl-10">5 Tips to Launch Your Career in Tech</p>
        <p className="text-xl pl-10 my-5">Whether you know exactly what you want to do or are still figuring it out, here are five tips to help you get
        started with a career in tech. Read the blog.</p>

        <div className="mx-auto">
            <img src={Blog01X} alt="AI Image" className="w-full h-[30rem] object-contain px-12 py-10" />
        </div>

        {/* Article */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-teal-600">
          If you’re interested in exploring a career in AI...
        </h1>
        <p className="text-gray-700 mt-4">
          Now is an excellent time to do your research into the best employers
          for your goals. Your career journey will vary, depending on job type,
          level, and industry. Use this guidance to help steer conversations
          with recruiters and find your best spot.
        </p>

        <h2 className="text-xl font-semibold text-teal-600 mt-6">
          How to spot employers with strong AI career cultures
        </h2>
        <p className="text-gray-700 mt-2">
          Further representing the criteria of a solid AI ecosystem, we advise,
          curate, and orchestrate technologies from market-leading partners:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li>AWS</li>
          <li>Google Cloud</li>
          <li>Intel</li>
          <li>Microsoft</li>
          <li>Nvidia</li>
          <li>Red Hat</li>
        </ul>

        <h3 className="text-lg font-semibold text-teal-600 mt-6">
          Will you work with professionals trained in AI business strategies?
        </h3>
        <p className="text-gray-700 mt-2">
          You’ll know you’re in a good spot to launch an artificial intelligence
          career if AI-enabled capabilities are central to the company’s
          business strategies. Ask a prospective employer about the various
          teams and departments that include AI in their strategies and
          deliverables.
        </p>

        <h4 className="text-lg font-semibold text-teal-600 mt-6">
          For example, these are areas where you could build an AI-connected
          career:
        </h4>

        <div className="mt-4">
          <h5 className="text-md font-semibold text-teal-600">
            Data and Analytics
          </h5>
          <p className="text-gray-700 mt-2">
            We build, test, and scale intelligent enterprise-wide systems. Lean,
            AI-enabled governance mitigates privacy and ethics-related
            challenges. Our teams apply AI and ML to improve products, services,
            and operations while experimenting to discover new value and
            insights for decision-makers.
          </p>
        </div>

        <div className="mt-4">
          <h5 className="text-md font-semibold text-teal-600">
            Systems and Product Engineering
          </h5>
          <p className="text-gray-700 mt-2">
            AI-enabled systems and product engineering services bring
            transformation to enterprises. Services include Computer Vision and
            NLP, Generative AI, MLOps, and trustworthy AI. Teams accelerate
            project delivery with dedicated GenAI Labs equipped with DGX
            supercomputers and Nvidia JetsonTx2/Javier.
          </p>
        </div>

        <div className="mt-4">
          <h5 className="text-md font-semibold text-teal-600">
            Business Process Operations
          </h5>
          <p className="text-gray-700 mt-2">
            We solve industry problems using AI, ML, computer visioning, and
            cognitive automation integrated with robotic process automation
            (RPA). We deliver process analysis, execution, and improvement,
            harnessing AI and generative AI for information search and
            retrieval, summaries, and content translation.
          </p>
        </div>

        <div className="mt-4">
          <h5 className="text-md font-semibold text-teal-600">
            Infrastructure and Operations
          </h5>
          <p className="text-gray-700 mt-2">
            Teams help businesses adopt AI and generative AI with core
            infrastructure, intelligent operations, and digital services. This
            includes cybersecurity, conversational AI speech recognition (ASR),
            data aggregation, and AI analytics. Low-code platforms let
            enterprises build generative AI applications.
          </p>
        </div>
      </div>

    </div>
    <SubBlog/>
    </>
    
  );
};
