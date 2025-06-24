import React from "react";

interface finalProjectProps {
  mode?: "reflection" | "abstract" | "full" | "sources";
}

const finalProject: React.FC<finalProjectProps> = ({ mode = "full" }) => {
  const sections = {
    Reflection: {
      type: "reflection",
      content: (
        <div>
          {" "}
          <p>
            Over the course of this project, I had to plan the development
            schedule and foresee any potential risks for adhering to the
            proposed timeline. I then effectively communicate why these risks
            exist and how we can mitigate them. I clearly define each team
            member's role and establish any report that may be needed between
            team members. I include myself as front-end application developer as
            well and go into detail about how the front-end and back-end of the
            application must work in concert with each other.
          </p>
          <p>
            As project manager in this artifact, I learned to be a better
            leader, both in practice and knowledge of project management tools
            as well as communication. The most formidable challenge in this
            project was putting myself in the role of project manager. This
            project was the first time I was tasked with overseeing a team of
            people. This was important because, while there will always be more
            to learn, I now have experience in this type of role and am more
            comfortable as a manager for it.
          </p>
        </div>
      ),
    },
    Abstract: {
      type: "abstract",
      content: (
        <div className="">
          This project takes the form of an email sent by a project manager (me)
          to a stakeholder. This project was created in 2022 for Regatta
          University, a local university looking to build a web application for
          students to view their grades. The email details risk analysis and
          mitigation for the development of an application, as well as a
          proposal for the project. This proposal includes key members'
          responsibilities for the project, how their responsibilities affect
          other team members' responsibilities, and an outlined schedule for
          development.
        </div>
      ),
    },
    MainContent: {
      title: "Distributed System Project",
      type: "content",
      content: (
        <div>
          <p>TO: John Doe; Project Manager</p>
          <p>FROM: Ian Hess</p>
          <p>DATE: June 16, 2022</p>
          <p>SUBJECT: Risk analysis and mitigation</p>
          <p>Hello John,</p>
          <p>
            {" "}
            I hope this email finds you well. The following is a description of
            the project we have been assigned, as well as the members involved.
            Under this you will find an identified risk and a mitigation
            solution I have proposed. At the very end you will find some
            appendices that will provide more information if necessary.{" "}
          </p>
          <p>
            <strong>Project Introduction</strong>
          </p>
          <p>
            The project we will undertake from September 1st to November 13th is
            one for developing a student facing web portal which allows them to
            access their grades in real-time. The web portal will employ
            graphical elements in a web-friendly format. In this project we will
            create the webpages and elements for students to access. The portal
            must also be secure. For further information you can refer to pages
            4 and 5 of the project charter, sections Project Purpose, Project
            Description and Project deliverables. You can find the project
            charter attached to this email.
          </p>
          <p>
            <strong>Key Stakeholders and Roles</strong>
          </p>
          <p>
            Key individuals in this project are Jane Smith, John Doe, Arthur
            Bowman, Shila Cole, Ana Fischer, John Jones, Michael Erdmann, Amber
            McLedon, and Cynthia Carmom. The following paragraphs describe their
            roles and why they are important to the project.
          </p>
          <p>
            Jane Smith is the project sponsor. A project sponsor is the person
            who appoints the project team and defines what will make this
            project successful. Jane will be a key member in the planning and
            closing phase as she will create the project team and confirm the
            results of the project are satisfactory.{" "}
          </p>
          <p>
            John Doe is the project manager. A project manager oversees the team
            and communicates with the project sponsor. John will be pivotal to
            every phase of the project as he will be overseeing the whole
            project.
          </p>
          <p>
            Arthur Bowman is the core stakeholder of this project. This means he
            is the person we will have to provide the finished product to, and
            he will be the final person to give it the ok. Arthur is important
            in this team because while he sitsoutside, he is our liaison to the
            customer.
          </p>
          <p>
            Shila Cole will be a team member. As the systems analyst,she will be
            able to provide us with information on how the application is
            performing and affecting the rest of the college’s system. She will
            also be able to confirm the security of the web application.
          </p>
          <p>
            Ana Fischer will be a team member. She is our application developer.
            She will handle developing the front end of the web portal. This
            entails everything the students will interact with on the web page.
            Ana will oversee user interface design and making the information
            easily readable and accessible to the students.
          </p>
          <p>
            John Jones will be a team member. He is our backend developer. He
            handles the parts of the web portal students don’t see. This
            includes the database and all the inner workings that the front end
            needs to work smoothly. John will make sure the system will always
            be up to date and accurate.
          </p>
          <p>
            This section includes the key stakeholders. Michael Erdmann is the
            director of middleware and a key stakeholder. He will have the eyes
            and experience we need to see that Ana’s work is functioning at its
            peak. Amber McLedon is the applications director and a key
            stakeholder. She will provide the eyes and experience to ensure that
            John Jones’ work is on point as well. Cynthia Carmom is the Project
            Management Organization’s director and a key stakeholder. Cynthia
            will ensure that the whole project is going smoothly, and all
            requirements are met.
          </p>
          <p>
            The technical role I have chosen for this project is application
            developer. This role oversees creating the front end of the
            application, the part that students will interact with. The front
            end of the application must be sleek and easy to use. It must
            deliver accurate and up to date information. To do this it will link
            up to the backend database, which is being made by someone else. The
            front end will be developed alongside the backend for the most part,
            as they must work together.
          </p>
          <p>
            {" "}
            According to the Gantt chart, my responsibilities will start on day
            9, where I will make a user interface mockup that will be reviewed
            and eventually approved. From there on I will spend the next five
            days developing the graphical user interface and create the links
            between the backend database and the GUI. For this step to be
            completed, I need the database to be completed, at least
            structurally. If it there is no structure for the database, I have
            nothing to link to. For the next ten days I will work with my team
            to test and integrate the application, making sure it can go live
            seamlessly. The whole team needs to be done their work so we can
            troubleshoot together to make the most seamless web app. Once that
            step is completed, we will go live with it. My responsibilities are
            closed out by assessing and managing the risks throughout the
            project’s life cycle.
          </p>
          <p>
            {" "}
            We have been asked to create a callout box to display more detailed
            information when hovered over. This task should not take too long to
            develop, as it should just be a few lines of JavaScript, but it may
            take a little while to test properly. This is the case because
            depending on what it links to in the database, we will need to make
            sure they link properly under all circumstances.
          </p>
          <p>
            {" "}
            The callout box will add time to the end of the web development
            cycle, though it should only be a day or two. The bulk of the week
            allotted for the additional project is going to be taken up by
            testing. Any time there is a communication between the front and
            back end, it needs to be tested extensively to make sure the
            application will work under all situations. If the callout box is
            expected to display more than one field from the database, we will
            have to test all the functions as well.{" "}
          </p>
          <p>
            The triple constraint should not be much of an issue for this
            project. We have been given an extra week to complete the project,
            which should be plenty of time to implement and test the addition.
            We have also been given $10,000 dollars, which will allow us to pay
            for the extra work, as there is no additional external cost added by
            the new part of the project. This addition falls right in line with
            the scope, so it is not an issue either.{" "}
          </p>
          <p>
            <strong>Risk </strong>
            <strong>Identification</strong>
          </p>
          <p>
            We are looking into a risk with a high likelihood of interrupting
            our schedule. This risk is the lack of specificity defined in the
            project scope. The graphical user interface is set to be made, but
            the type and design of the GUI is very ambiguous. If the customer
            should decide they want something we have not accounted for, it
            could take much more time than we have planned for. In addition to
            this, if we have already coded an interface and are requested to
            start again from scratch, that is a lot of time wasted.{" "}
          </p>
          <p>
            Dependencies that are in jeopardy with this risk include everything
            in section 1.3.1 Design of the Work Breakdown Structure as well as
            implementation and testing the product. Section 1.3.1.1 is creating
            a mockup of the user interface, if we can clarify what the customer
            wants, we will be able to streamline this process and make all
            dependencies moving forward much easier to deal with as well.
          </p>
          <p>
            {" "}
            Should this issue go unaddressed we will waste much time and
            money-making attempts at designing multiple interfaces before
            finding what the customer needs. Time will be constrained because we
            will have to dedicate Ana Fischer’s time to not only developing the
            whole front end but designing multiple GUI’s until we land on a
            suitable one. Money will be constrained because we will have to pay
            her for doing what equates to busy work. Scope is up in the air
            because this risk is an issue of poorly defined scope.{" "}
          </p>
          <p>
            <strong>Risk Mitigation</strong>
          </p>
          <p>
            {" "}
            Mitigation for this risk should be very simple. We can either go
            directly to the customer and ask what they had in mind before we
            make mockups, or after so they have an idea of what is possible. If
            we go before Ana makes mockups of the interface, we should find
            similar websites to give them an idea of what they want and a tool
            for them to be more specific. If they are not technologically
            inclined, they may give very generic answers for how they want it to
            look and be used. If we can bring something for them to relate what
            they want through, they can point at it and say, oh I like that
            element or no they do not like that.
          </p>
          <p>
            {" "}
            This mitigation strategy should have minimal impact on the schedule
            of the project. We may have to give the team an extra day to
            research examples or come up with a few rough mockups to bring to
            the customer. Beyond that it should cut out a few days of
            frustration trying to figure out what they need the interface to
            look like. The only other variables possible are if we cannot find a
            GUI like anything they want, and if that is the case, we will have
            to sit down with them and ask a lot of questions in order to narrow
            the choices. This should still be quicker than having to change the
            GUI after starting it.
          </p>
          <p>
            {" "}
            This risk mitigation strategy is the best course of action for our
            project because we have identified the problem and with this
            strategy we can get ahead of the problem before it even affects the
            project. Undoubtedly the customer has used or seen some kind of
            website that they can tell us looks how they like, and if we take a
            short amount of time to prepare examples ourselves, we can prevent
            poor use of time and creating frustration in the team while
            executing the project. This strategy may cost us a few extra hours
            to the schedule and the cost associated with paying the team for
            that time, but it will be nothing compared to having to redesign the
            front end and the connections to the back end should the customer
            not like the designed front end. As stated in our project manager
            training, communication is the most important tool we can utilize
            and properly communicating how the customer needs the interface to
            work is necessary for this project to run smoothly.
          </p>
          <p>
            This project is to design a sleek, usable, web application for
            students to be able to check their grades at any time they want. The
            information displayed in this web app must always be accurate and up
            to date. This will be accomplished by dividing the bulk of the work
            in two, with our backend developer handling the database and
            information the students will be looking at, while the front-end
            developer creates the sleek interface the students will use to
            access the information. We have vague guidelines for the user
            interface, and this is an identified risk. We should provide
            examples of possible interfaces and communicate with the
            stakeholders as soon as possible to avoid this risk.
          </p>
          <p>
            <strong>Communication</strong>
          </p>
          <p>
            The following appendices give background for this project and
            provide more information should your team find it necessary to look
            further into the project.{" "}
          </p>
          <p> Thank you.</p>
          <br />
          <p>
            <h2 className="text-2xl font-bold mb-4">Appendices:</h2>
          </p>
          <p>
            <strong> Project Charter:</strong>
          </p>
          <p>
            <strong>Regatta University</strong>
          </p>
          <p>
            <strong>IT Project Charter </strong>
          </p>
          <p>For</p>
          <p>
            <strong>Student Degree Progress</strong>
          </p>
          <p>Version 1.0</p>
          <p>Table of Contents</p>
        </div>
      ),
    },
    DocumentHistory: {
      title: "Document History",
      type: "content",
      content: (
        <div>
          <p>
            <strong>Document Revision/Release Status</strong>
          </p>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Revision
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Date
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Description of Changes
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Author / Editor
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">0.1</td>
              <td className="border border-gray-300 px-4 py-2">6/29/15</td>
              <td className="border border-gray-300 px-4 py-2">
                Initial format
              </td>
              <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1.0</td>
              <td className="border border-gray-300 px-4 py-2">8/31/15</td>
              <td className="border border-gray-300 px-4 py-2">
                Initial draft
              </td>
              <td className="border border-gray-300 px-4 py-2">John Doe</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
          </table>
        </div>
      ),
    },
    ExecutiveSummary: {
      title: "Executive Summary",
      type: "content",
      content: (
        <div>
          <p>
            Students leverage a web portal to access university-related
            information and resources. Content within it can be targeted to all
            users or to those within a pre-specified role (e.g., students at a
            particular campus) or it can be user-specific.{" "}
          </p>
          <p>
            As an academic institution, one piece of information critical to
            students is their current progress in their degree program or
            programs.{" "}
          </p>
          <p>
            The purpose of the student degree progress project is to create an
            area to display user-specific academic progress.
          </p>
        </div>
      ),
    },
    ProjectPurposeJustification: {
      title: "Project Purpose/Justification",
      type: "content",
      content: (
        <div>
          <p>
            University leadership requested this project to promote student
            awareness and providestudents easy access to their degree progress.
          </p>
        </div>
      ),
    },
    ProjectDescription: {
      title: "Project Description",
      type: "content",
      content: <div></div>,
    },
    PreliminaryScopeStatement: {
      title: "Preliminary Scope Statement",
      type: "content",
      content: (
        <div>
          <p>
            The purpose of this project is to create an area that displays
            user-specific academic progress within the appropriate roles,
            leveraging data through a back-end system. This project will include
            the necessary modifications to the backend to relay this
            information. More specifically, this project will include the
            following:
          </p>
          <p>Creating the graphical elements in a web-friendly format</p>
          <p>
            Creating the necessary web view to accommodate the graphical
            elements
          </p>
          <p>
            Creating the necessary changes to the backend to prepare data
            supporting the student information
          </p>
          <p>
            Creating the necessary web service to securely expose the student’s
            information to the graphical elements and web view
          </p>
        </div>
      ),
    },
    OutofScope: {
      title: "Out of Scope",
      type: "content",
      content: (
        <div>
          <p>
            Due to business-specific processes, some students, particularly
            those who have been pursuing a degree for over four years, may not
            be able to see their academic progress using the deliverables of
            this project. Changes to the backend to expand this functionality
            are out of scope, as are any changes intended to enhance
            functionality to provide additional data beyond the academic
            progress already captured in another system.
          </p>
        </div>
      ),
    },
    ProjectObjectivesandSuccessCriteria: {
      title: "Project Objectives and Success Criteria",
      type: "content",
      content: (
        <div>
          <p>
            The project will provide the functionality described within the
            preliminary scope statement.
          </p>
          <p>
            The project will be delivered without incurring any additional
            expenses.
          </p>
          <p>
            The project will be delivered free from any significant defects or
            without causing any down time.
          </p>
          <p>
            The project will be delivered no later than two weeks from the
            target time frame defined within the milestone schedule below.
          </p>
        </div>
      ),
    },
    Constraints: {
      title: "Constraints",
      type: "content",
      content: (
        <div>
          <p>Additional funding is not available.</p>
          <p>
            The information available to students is derived from data within
            the back end and is as accurate, timely, and available as the source
            data and its structuring.
          </p>
        </div>
      ),
    },
    Assumptions: {
      title: "Assumptions",
      type: "content",
      content: (
        <div>
          <p>
            No major changes in formatting or scope will be presented during the
            life of the project.
          </p>
        </div>
      ),
    },
    ProjectDeliverables: {
      title: "Project Deliverables",
      type: "content",
      content: (
        <div>
          <p>Project Charter</p>
          <p>Project Management Plan</p>
          <p>Design</p>
          <p>User Interface Mockup</p>
          <p>Architectural Design</p>
          <p>Test Plan</p>
          <p>Test Scenarios</p>
        </div>
      ),
    },
    ProjectResourceEstimate: {
      title: "Project Resource Estimate",
      type: "content",
      content: (
        <div>
          <p>
            The student degree progress project is estimated to use the
            following resources:
          </p>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Project Resource Estimate{" "}
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Project Resource Estimate{" "}
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Resource</td>
              <td className="border border-gray-300 px-4 py-2">
                Estimated Work Hours
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Manager
              </td>
              <td className="border border-gray-300 px-4 py-2">48 Hours</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Systems Analyst
              </td>
              <td className="border border-gray-300 px-4 py-2">12 Hours</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Middleware Applications Developer
              </td>
              <td className="border border-gray-300 px-4 py-2">44 Hours</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Backend Systems Analyst
              </td>
              <td className="border border-gray-300 px-4 py-2">50 Hours</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Total:</td>
              <td className="border border-gray-300 px-4 py-2">154 Hours</td>
            </tr>
          </table>
        </div>
      ),
    },
    SummaryMilestoneSchedule: {
      title: "Summary Milestone Schedule",
      type: "content",
      content: (
        <div>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Summary Milestone Schedule – List key project milestones
                relative to project start
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Summary Milestone Schedule – List key project milestones
                relative to project start
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Milestone
              </td>
              <td className="border border-gray-300 px-4 py-2">Target Date </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Start{" "}
              </td>
              <td className="border border-gray-300 px-4 py-2">September 1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Graphical Component Unit Complete
              </td>
              <td className="border border-gray-300 px-4 py-2">September 23</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Web View Unit Complete
              </td>
              <td className="border border-gray-300 px-4 py-2">September 25</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Backend Unit Complete
              </td>
              <td className="border border-gray-300 px-4 py-2">October 7</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Integration Testing Complete
              </td>
              <td className="border border-gray-300 px-4 py-2">October 14</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Submit to Leadership
              </td>
              <td className="border border-gray-300 px-4 py-2">October 26</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Leadership Acceptance
              </td>
              <td className="border border-gray-300 px-4 py-2">November 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Transition to Production
              </td>
              <td className="border border-gray-300 px-4 py-2">November 5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Closeout
              </td>
              <td className="border border-gray-300 px-4 py-2">November 13</td>
            </tr>
          </table>
        </div>
      ),
    },
    SummaryBudget: {
      title: "Summary Budget",
      type: "content",
      content: (
        <div>
          <p>
            <strong>Fiscal Year</strong>
          </p>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Summary Budget – List component project costs{" "}
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Summary Budget – List component project costs{" "}
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Component
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Component Cost
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Hardware</td>
              <td className="border border-gray-300 px-4 py-2">$0</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Software and Licensing
              </td>
              <td className="border border-gray-300 px-4 py-2">$0</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Vendor</td>
              <td className="border border-gray-300 px-4 py-2">N/A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Total</td>
              <td className="border border-gray-300 px-4 py-2">$0</td>
            </tr>
          </table>
        </div>
      ),
    },
    ProjectApprovalRequirements: {
      title: "Project Approval Requirements",
      type: "content",
      content: (
        <div>
          <p>
            The project will be completed once all requirements are met and all
            deliverables have been received and approved by the client.
          </p>
        </div>
      ),
    },
    ProjectOrganization: {
      title: "Project Organization",
      type: "content",
      content: (
        <div>
          <table className="w-full border-collapse border border-gray-300 my-4">
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Role
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold">
                Name(s) – Department(s)
              </th>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Sponsor
              </td>
              <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Manager
              </td>
              <td className="border border-gray-300 px-4 py-2">John Doe</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Core Stakeholder
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Arthur Bowman
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Vendor Resources
              </td>
              <td className="border border-gray-300 px-4 py-2">None</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Project Team Members
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Shila Cole, Ana Fischer, John Jones
              </td>
            </tr>
          </table>
        </div>
      ),
    },
    Authorization: {
      title: "Authorization",
      type: "content",
      content: (
        <div>
          <p>
            Approval of this project charter provides authorization to move
            forward in accordance with the information contained in this
            document.
          </p>
        </div>
      ),
    },
    ProjectTeam: {
      title: "Project Team",
      type: "content",
      content: (
        <div>
          <p>John Doe, Project Manager</p>
          <p>Shila Cole, Systems Analyst</p>
          <p>Ana Fischer, Middleware Application Developer</p>
          <p>John Jones, Backend Systems Analyst</p>
          <p>Date:</p>
          <p>Date:</p>
          <p>Date:</p>
          <p>Date:</p>
        </div>
      ),
    },
    DirectorsofAssignedResources: {
      title: "Directors of Assigned Resources",
      type: "content",
      content: (
        <div>
          <p>Michael Erdmann, Middleware Director</p>
          <p>Amber McLedon, Applications Director</p>
          <p>Cynthia Carmom, PMO Director/Acting Student Systems Director</p>
          <p>Date:</p>
          <p>Date:</p>
          <p>Date:</p>
        </div>
      ),
    },
    ProjectSponsor: {
      title: "Project Sponsor",
      type: "content",
      content: (
        <div>
          <p>Jane Smith, Project Sponsor</p>
          <p>Date:</p>
          <p>
            <strong> RACI Chart</strong>
            <img src="src\assets\images\emailRACI.png" />
          </p>
          <p>
            <strong>GANTT Chart</strong>
            <img src="src\assets\images\emailGANTT.png" />
          </p>
          <p>
            <strong>(</strong>Please disregard all weekend schedules. These are
            just displayed because the task is planned through multiple weeks,
            not because the team is scheduled to work on weekends.)
          </p>
        </div>
      ),
    },
  };

  switch (mode) {
    case "sources":
      return <div>No sources section found</div>;
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
            Project Manager Email
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.MainContent.title}
            </h2>
            {sections.MainContent.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.DocumentHistory.title}
            </h2>
            {sections.DocumentHistory.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ExecutiveSummary.title}
            </h2>
            {sections.ExecutiveSummary.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectPurposeJustification.title}
            </h2>
            {sections.ProjectPurposeJustification.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectDescription.title}
            </h2>
            {sections.ProjectDescription.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.PreliminaryScopeStatement.title}
            </h2>
            {sections.PreliminaryScopeStatement.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.OutofScope.title}
            </h2>
            {sections.OutofScope.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectObjectivesandSuccessCriteria.title}
            </h2>
            {sections.ProjectObjectivesandSuccessCriteria.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.Constraints.title}
            </h2>
            {sections.Constraints.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.Assumptions.title}
            </h2>
            {sections.Assumptions.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectDeliverables.title}
            </h2>
            {sections.ProjectDeliverables.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectResourceEstimate.title}
            </h2>
            {sections.ProjectResourceEstimate.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.SummaryMilestoneSchedule.title}
            </h2>
            {sections.SummaryMilestoneSchedule.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.SummaryBudget.title}
            </h2>
            {sections.SummaryBudget.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectApprovalRequirements.title}
            </h2>
            {sections.ProjectApprovalRequirements.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectOrganization.title}
            </h2>
            {sections.ProjectOrganization.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.Authorization.title}
            </h2>
            {sections.Authorization.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectTeam.title}
            </h2>
            {sections.ProjectTeam.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.DirectorsofAssignedResources.title}
            </h2>
            {sections.DirectorsofAssignedResources.content}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {sections.ProjectSponsor.title}
            </h2>
            {sections.ProjectSponsor.content}
          </section>
        </div>
      );
  }
};

export default finalProject;
