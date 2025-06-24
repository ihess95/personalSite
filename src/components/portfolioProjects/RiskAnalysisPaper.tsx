import React from "react";

interface IT412FinalProps {
  mode?: "reflection" | "abstract" | "full" | "sources";
}

const IT412Final: React.FC<IT412FinalProps> = ({ mode = "full" }) => {
  const sections = {
    Abstract: {
      type: "abstract",
      content: (
        <div>
          This is a risk analysis report for ABC Healthcare. In this project I
          must communicate with a company that handles patients' confidential,
          personally identifiable information. At the time of writing this
          paper, the company was violating many cyber laws, including HIPAA and
          COBRA. This is a network with no firewall, which is egregious for any
          business, let alone one that handles such important data.
        </div>
      ),
    },
    Reflection: {
      type: "reflection",
      content: (
        <div>
          <p>
            I chose this project to exemplify my communication skills because I
            needed to effectively communicate the severity of the situation
            without putting blame on anyone, or worse offending them. This
            company is a small, 50-person startup, with little to no IT
            experience, it isn't their fault that their network is lacking, but
            it is in dire need of change. In this project, I explain HIPAA and
            COBRA and HITECH, as well as the institutions that create general
            codes of ethics for companies in technology.
          </p>
          <p>
            The hardest part of this artifact was wading through cyber security
            law and codes of ethics to learn how to effectively communicate why
            the network is an issue. A very important part of the communication
            in this report is backing up my statements with either laws or
            established ethical boundaries. This makes it sound both more
            legitimate and less like I am personally blaming ABC Healthcare.
          </p>
          <p>
            {" "}
            In addition to fostering my professional communication skills, this
            project taught me broad cyberlaw and some acts that establish
            precedent. These include HIPAA, HITECH and COBRA, which are
            important to cyberlaw as they protect customer data, which is
            typically stored on computers. I also studied ethical guidelines
            imposed by ISSA and AT&T to substantiate my claims of crossed
            ethical boundaries.
          </p>
          <p>
            This project pushed me in new ways. I had to immerse myself in legal
            precedent and ethical guidelines. In my career I have had to
            practice HIPAA guidelines but never had to research and establish
            company guidelines myself. This report helped prepare me for making
            such decisions in the real world.
          </p>
        </div>
      ),
    },
    MainContent: {
      title: "Main Content",
      type: "content",
      content: (
        <div>
          <p>
            <strong>ABC Healthcare Risk Analysis Paper</strong>
          </p>
          <p>Ian Hess</p>
          <p>Southern New Hampshire University</p>
          <p>IT 412: Cyberlaw and Ethics</p>
          <p>Professor Alicia Peltier</p>
          <p>October 13, 2023</p>
          <p>Information Technology Structure Description</p>
          <p>
            This is a risk analysis for ABC Healthcare; a small startup with 50
            employees. There is a serious lack of cyber security standards
            adhered to in the current network topography. As it stands, anyone
            with a computer can access our open wireless network, and with a
            little knowledge, will have access to our Healthcare data server and
            all the personally identifiable information stored on it. ABC
            Healthcare needs to amend this as soon as possible or risk
            consequences of violating many cyberlaws, including HIPAA and COBRA.
            ABC Healthcare’s network has no firewall, a necessary part of any
            secure network.
          </p>
          <p>
            {" "}
            Firewalls restrict access to anything behind them. Ideally ABC
            Healthcare would implement two. The first firewall would be set up
            after the router, protecting our network from the wider internet.
            The second firewall would be in front of the healthcare data server,
            preventing unauthorized access from this server. This also means
            that not just anyone connected to our local network can access this
            sensitive data. This leads us to the company’s current wireless
            network.
          </p>
          <p>
            As it stands, guests who access our free wireless network are
            allowed access to the same network our employees use. This needs to
            change, as it is an inherent security flaw. By creating a guest
            network, we can offer customers wireless internet, while preventing
            them from having access to our important work network. This will
            prevent guests from being able to access or even see our network
            topology, a huge plus for cyber security.
          </p>
          <p>
            Currently, ABC Healthcare allows employees to access personal emails
            and perform web browsing not related to work on their work systems.
            Unfortunately, this presents another major security flaw. No company
            should have glaring security issues, but it is unacceptable for a
            company that locally stores healthcare information for clients.
            Employees can use their personal phones to access the guest network
            to accomplish this instead.
          </p>
          <p>
            In addition to these network topology concerns, there are a few
            other cybersecurity issues that need to be addressed. Instead of
            properly setting up our network to be as safe as possible, ABC
            Healthcare installed a video monitoring system. The employees were
            not informed of this, which brings up a host of ethics violations,
            more on that later. While a video monitoring system can be a useful
            addition to company security posture, it is not a solution, and all
            employees should be made aware when and where they are being filmed.
            ABC Healthcare also recycles unused copies without shredding them.
            This is another major security flaw. All copies should be shredded
            before being disposed of to prevent possible secure information
            leaks.
          </p>
          <p>Cyberlaws and Ethics Regulations Pertaining to ABC Healthcare</p>
          <p>
            Any healthcare provider must adhere to the Health Insurance
            Portability and Accountability Act (HIPAA). HIPAA was established to
            provide a national standard that protects personal health
            information. Part of the goal of HIPAA is to protect this data,
            while also allowing its transfer and use in the health industry.
            (U.S. Department of Health and Human Services, 2022) HIPAA could
            completely lock down all information, but then that information
            would be useless and just a liability for companies. By regulating
            standards that allow information transfer in a protected way, the
            information is kept safe and confidential, while still being usable.
            In section (e)(1) of the HIPAA Administrative Simplification
            Regulation Text Transmission security is defined as “Implement(ing)
            technical security measures to guard against unauthorized access to
            electronic protected health information that is being transmitted
            over an electronic communications network.” This is exactly what the
            first section of this risk assessment aims to address.
          </p>
          <p>
            The Health Information Technology for Economic and Clinical Health
            (HITECH) is an addendum to HIPAA that aims to improve quality,
            safety and efficiency of care as well as ensure privacy and security
            among other goals. HITECH also came with harsher penalties for
            violating HIPAA. Under our current infrastructure ABC Healthcare
            violates HIPAA and HITECH, meaning we will experience the harsher
            prenalty
          </p>
          <p>
            In addition to laws that ABC Healthcare may be infringing on, there
            are many ethical regulations that are not being followed. While
            ethical regulations are not laws, adhering to them may help make the
            company a better place for customers and employees. There are
            companies that set up their own code of ethics, and there are
            outside agencies that create more general codes for companies to
            follow, such as the Information Systems Security Association (ISSA).
            ISSA defines practices that help companies uphold the CIA triad of
            information security more easily and effectively. The CIA triad
            refers to confidentiality, integrity, and availability of
            information used by the company. Some of the ethics defined by ISSA
            are “Performing all professional activities in accordance with
            applicable laws and the highest ethical principles.” By adhering to
            the advice given in this risk assessment, ABC Healthcare will
            already be in line with this rule, as well as the following rule,
            “promote generally accepted information security current best
            practices and standards.” There are other more general guidelines
            such as “be diligent and honest” and “refrain from activities which
            may create a conflict of interest or damage company reputation.”
            (ISSA 2019)
          </p>
          <p>Ethics Violations</p>
          <p>Unethical behaviors – Personal or Professional</p>
          <p>
            There are many unethical behaviors detailed in the company debrief
            and mentioned in the first section of this risk assessment. ISSA’s
            ethical regulations’ first rule is to do things by the book,
            following the law. As previously stated, there are plenty of laws we
            have broken, and best practices that have not been implemented. This
            is an ethical violation under ISSA’s guidelines. The previous
            violations were professional violations. Another professional
            violation is not shredding important documents. This violation can
            lead to leaked sensitive information and, as a healthcare
            organization, it is ABC Healthcare’s professional duty to prevent
            this to the best of the companies’ ability. ISSA also asks that
            employees refrain from any activities that can damage the reputation
            of the company. Not disclosing video monitoring is a textbook
            example of a violation of this guideline. This is a personal
            violation. People deserve to know when they are being filmed.
          </p>
          <p>
            Unethical behaviors – Impact on IT and computing with ABC Healthcare
          </p>
          <p>
            The listed unethical behaviors have varying implications for the
            information technology infrastructure at ABC Healthcare.
            Professional violations have more direct consequences than personal
            ones. This is not to say personal ethical violations have no impact.
            Employees are the number one security threat in cyber security. If
            an employee is mistreated, they can leak private information and get
            the company into a lot of unnecessary trouble. Professional
            violations, including poorly constructed network infrastructure,
            improperly discarded documents, and exposed networks cause a litany
            of cybersecurity vulnerabilities that can be easily exploited. If a
            bad actor got a hold of any of these vulnerabilities, ABC Healthcare
            should be ready for several technical difficulties, network outages
            and even lawsuits. This will cause the company to significantly more
            money than being proactive and upgrading the system to reflect
            industry standards.
          </p>
          <p>4. Cyberlaw noncompliance</p>
          <p>
            ABC Healthcare runs the risk of violating many cyberlaws under its
            current network configuration and policies. There are many US laws
            that pertain to companies and their network infrastructure. The
            Federal Information Security Management Act (FISMA) is one of the
            most important of these laws. FISMA was created as a response to the
            9/11 terrorist attacks as a means for the United States government
            to oversee company information security to guarantee citizens
            safety. Over time, FISMA has been updated to reflect modern
            information security standards. While FISMA pertains to federal IT
            systems, which are defined as any IT system that holds military
            information, and ABC Healthcare does not have federal IT systems, it
            is an important guideline to follow. For our purposes the Act
            requires companies to create adequate policies to reduce cyber
            security risks, implement security training, test security, and have
            reasonable recovery and continuity plans. ABC Healthcare has none of
            these requirements. Again, ABC Healthcare is not a federal company,
            and does not work in the defense sector, but as a healthcare
            company, it is important to look at cyberlaws that hold companies to
            strict standards.
          </p>
          <p>
            {" "}
            As a healthcare company, ABC Healthcare must follow HIPAA, or be
            persecuted. HIPAA is a law created to protect the privacy of
            individuals in a healthcare environment. HIPAA ensures that
            companies take the proper steps to protect personal medical
            information for their customers. An important part of HIPAA is the
            protection of the transfer of this data. According to the American
            Medical Association: “Failure to comply with HIPA can result in
            civil and criminal penalties” (American Medical Association), for
            civil penalties, willful violation can result in a fine up to
            $50,000 per violation. Criminal penalties can result in fines of up
            to $250,000 and imprisonment of up to ten years. The department of
            justice “interpreted ‘knowingly’ as requiring only knowledge of the
            actions that constitute an offense. Specific knowledge of an action
            being in violation of the HIPAA statute is not required.” (American
            Medial Association) This means that as ABC Healthcare has operated,
            it could be punished under HIPAA.
          </p>
          <p>
            {" "}
            HITECH is another act that ABC Healthcare is violating. The Health
            Information Technology for Economic and Clinical Health was enacted
            as part of the American Recovery and Reinvestment act of 2009.
            HITECH serves to strengthen enforcement of HIPAA rules. HITECH
            established four levels of culpability, corresponding fines, and a
            maximum penalty of $1.5 million.
          </p>
          <p>
            {" "}
            Currently, ABC Healthcare allows staff members to bring in their own
            laptops to perform company work on the company network with. This is
            a huge security risk, and a violation of all three acts previously
            mentioned. Devices not maintained by the company are a liability and
            may be compromised. It is recommended that companies run in a
            zero-trust environment for this reason. Currently, we are not set up
            in this way, allowing an infected computer on our LAN to run amok in
            it. Similarly, we allow customers and guests to connect to the same
            network we do our work on, another huge violation. By simply setting
            up a guest network, we can avoid a lot of trouble in the future.
            This is also the network that employee personal devices should be
            connected to. This may be inconvenient for our employees, but it is
            an important security precaution. This leads us to our next section.
          </p>
          <p>5.Acceptable use-of-technology policies</p>
          <p>
            {" "}
            As it stands, ABC Healthcare has no acceptable use policies in
            place. There are no guidelines for our employees to follow; they
            have no training to know they are doing anything that could
            adversely affect the company. To help ABC Healthcare create its own
            acceptable use policy, we will look at other companies’ policies,
            compare them, and see what applies to our use case. We will be
            looking at the Information Systems Security Association (ISSA) AUP
            and the AT&T AUP. ISSA has a more general AUP that will likely apply
            to our situation more than the AT&T one, which focuses on network
            usage from an internet service provider point of view.
          </p>
          <p>
            {" "}
            AT&T prohibits use of their IP services for unlawful, harmful
            reasons as well as prohibiting the use of their network to interfere
            with other user’s network use. Activities that are prohibited
            include but are not limited to violations of intellectual property
            rights, threatening material, inappropriate interaction with minors
            and more. Customers also may not use AT&T’s services for actions
            considered security violations, including unauthorized monitoring,
            probing, or scanning of networks, hacking, impersonating others,
            engaging in piracy and more. “Customers are held fully accountable
            for their actions and failure to observe the guidelines can result
            in service termination.” (AT&T) These rules are good for inspiration
            for ABC Healthcare, but do not directly apply. We are not providing
            our customers with IP services as our business, however we can and
            should hold our employees to similar policies, as well as anyone
            using our guest network.
          </p>
          <p>
            {" "}
            ISSA provides a more general acceptable use policy that may be more
            pertinent to our operation. Guidelines in this AUP include,
            performing professional activities in accordance with laws and
            ethical principles, promote security best practices where
            applicable, maintain confidentiality, be diligent and honest, do not
            engage in activities that may result in conflicts of interest or
            damage employer reputation and more. Example activities include
            using profanity, providing unauthorized access to the network,
            willingly putting viruses on company systems and more. Their
            punishment is removing posts from their forum, which is not a
            punishment relevant to us.
          </p>
          <p>
            {" "}
            To make these policies fit our organization better, we must adapt
            them. For instance, both policies have sections focused on
            prohibiting users from breaking laws and causing problems with their
            platforms. We should do the same. ABC Healthcare should implement an
            AUP that prohibits anyone on our network from using it for
            nefarious, unprofessional reasons, like the ones listed in both AT&T
            and ISSA’s AUPs. We should also write a section that is specific to
            the healthcare industry. Users may not access personal Health
            Information of other customers knowingly. The punishment for failing
            to comply with our AUP must be different than the other companies as
            well. We can remove employees and customers from the internet, but
            doing so may prevent them from being able to accomplish the tasks
            they need. Employees will need to be reprimanded in another way,
            maybe a suspension or termination depending on the seriousness of
            the violation. Customers can likely just have their access to the
            complimentary network revoked.
          </p>
          <p>6. Code of Ethics</p>
          <p>
            {" "}
            A code of ethics is an important part of a cybersecurity posture.
            One of the most important pieces of the cybersecurity puzzle is
            employees. Employees are the easiest vector of compromise in the
            cyber world. The best way to help employees be more secure users is
            to develop a company culture that supports this goal. A code of
            ethics is a ground rule that supports the goal. ISSA again has an
            appropriate code of ethics that ABC Healthcare can learn from. Their
            code promotes employees to perform in accordance with laws and
            ethical standard, promote information security best practices,
            maintain confidentiality, be diligent in responsibilities and
            honesty, refrain from harmful activities and do not intentionally
            injure colleague, client, or employer reputation. Again, we can look
            at AT&T as well. AT&T defines their values and then expounds on how
            employees can use their code of ethics to uphold these values. The
            values are Live true – do the right thing, think big, pursue
            excellence, be there, stand for equality and make a difference.
            AT&T’s code applies much more to the company culture than ISSA’s
            does. Where ISSA uses plain and professional language to convey its
            codes, AT&T uses more casual and personal language. Perform in
            accordance with laws and ethical standards vs “live true.” AT&T also
            focuses more heavily on interpersonal conduct than ISSA. AT&T’s
            values consist of personal goals and how that can move the company
            forward, whereas ISSA just states how to comply with the rules.
          </p>
          <p>
            {" "}
            ABC Healthcare can learn from these companies to create a code of
            ethics that functions as not only a guideline for company culture
            but also a way to reinforce personal goals. Our values should be
            adapted from these. ABC Healthcare needs its employees, as a
            healthcare company, to uphold the utmost respect for the work they
            do, and as a relatively small business should have the time and
            personality to care about the personal growth of all employees. Our
            code of ethics should include performing duties with respect and to
            the utmost of our abilities, in accordance with all applicable laws
            and regulations. Employees should strive to be the best they can at
            whatever their job is. Employees should be encouraged to report
            anything that makes them uncomfortable, and they should see real
            results when they do. Employees should be taught basic cybersecurity
            best practices to allow them to uphold this standard. Employees
            should refrain from damaging the reputation of colleagues,
            clientele, and employers.
          </p>
        </div>
      ),
    },
    Sources: {
      content: (
        <div>
          <p>
            ‌American Medical Association. “HIPAA Violations & Enforcement.”{" "}
            <em>American Medical Association</em>, 2023, .
          </p>
          <p>
            AT&T. “Terms of Service - Legal Policy Center - AT&T.”{" "}
            <em>Att.com</em>, 2017, .
          </p>
          <p>
            “COBC.” <em>Cobc.att.com</em>, cobc.att.com/responsibilities.
          </p>
          <p>
            Drabant, A., & HHS Office of Civil Rights. (2013).{" "}
            <em>HIPAA Administrative Simplification Regulation Text</em> (p.
            67).{" "}
          </p>
          <p>
            Grama, J. L., & Spinello, R. (2014). Southern New Hampshire
            University IT412 Custom VitalBook (2nd ed.). Jones & Bartlett
            Learning.{" "}
          </p>
          <p>
            Information Systems Security Association. “Information Systems
            Security Association Acceptable Use Policy.” <em>Www.issa.org</em>,
            .
          </p>
          <p>
            HIPAA Journal. <em>What Is the HITECH Act</em>. 2023,
            www.hipaajournal.com/what-is-the-hitech-act/.
          </p>
          <p>
            <em>Information Systems Security Association</em>. (2019). Issa.org.{" "}
          </p>
          <p>
            U.S. Department of Health & Human Services. “HITECH Act Enforcement
            Interim Final Rule.” <em>HHS.gov</em>, 2017, .
          </p>
          <p>
            U.S. Department of Health and Human Services. (2022).{" "}
            <em>Summary of the HIPAA privacy rule</em>. HHS.gov.{" "}
          </p>
        </div>
      ),
    },
  };

  switch (mode) {
    case "sources":
      return sections.Sources ? (
        <div className="max-w-4xl mx-auto p-6">{sections.Sources.content}</div>
      ) : (
        <div>No sources section found</div>
      );
    case "abstract":
      return sections.Abstract ? (
        <div className="max-w-4xl mx-auto p-6">{sections.Abstract.content}</div>
      ) : (
        <div> No Abstract section found</div>
      );
    case "reflection":
      return sections.Reflection ? (
        <div className="max-w-4xl mx-auto p-6">
          {sections.Reflection.content}
        </div>
      ) : (
        <div> No Reflection section found</div>
      );
    case "full":
    default:
      return (
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-8">
            Risk Analysis Paper
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.MainContent.title}
            </h2>
            {sections.MainContent.content}
          </section>
        </div>
      );
  }
};

export default IT412Final;
