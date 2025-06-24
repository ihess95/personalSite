import React from "react";

interface IT415FinalProjectIIProps {
  mode?: "reflection" | "abstract" | "full" | "sources";
}

const IT415FinalProjectII: React.FC<IT415FinalProjectIIProps> = ({
  mode = "full",
}) => {
  const sections = {
    Abstract: {
      type: "abstract",
      content: (
        <div>
          This project looks at a case study of the company F-Secure, a small
          cyber security company who are looking to become a major name in the
          industry. After analyzing the case study, I propose a solution. At the
          time of this case study, (2008) software as a service was still a new
          idea, and mobile phone security was only starting to become relevant.
          With the benefit of hindsight, I was able to propose a mobile phone
          cyber security application. Over the course of this project, I
          researched, proposed and eventually developed this application.
        </div>
      ),
    },
    Reflection: {
      type: "reflection",
      content: (
        <div>
          <p>
            F-Secure needed a new business idea to outmaneuver the competition.
            This project explains why a mobile application would be a smart
            business decision for F-Secure. It also proposes development
            methodology, language and platform. When F-Secure's position is
            taken into consideration, scrum, Kotlin and Android were all chosen
            respectively. Scrum allows for fast, monitored development. Kotlin
            was chosen because of its speed relative to Java. Android was chosen
            because, as an open-source operating system, customers may perceive
            it as requiring extra security.
          </p>
          <p>
            This artifact was challenging. Coming up with a solution for
            F-Secure's problem was a more in-depth project than I had been
            tasked with up to this point. When I first proposed the application,
            I didn't realize there was a second part of the course that required
            me to actually develop the app. For this reason, I had to adjust the
            scale of the project, as I am not a cyber security expert. I was
            still able to develop a modest mobile application for this project.
            If I were to recreate this project, I would probably develop an
            application for a less demanding field.
          </p>
        </div>
      ),
    },
    MainContent: {
      type: "content",
      content: (
        <div>
          <p>
            <strong>Ian Hess</strong>
          </p>
          <p>
            <strong>Project Plan</strong>
          </p>
          <p>
            <strong>IT-415</strong>
          </p>
          <p>
            <strong>Professor Alexandre Lazo</strong>
          </p>
          <p>
            <strong>4/19/2024</strong>
          </p>
          <p>F-Secure Project Plan and System Design Document</p>
          <p>Project Plan</p>
          <p>Work Breakdown Structure</p>
          <p>
            Firstly, I will implement the front end of the home screen of the
            application. This will allow for finding potential issues with the
            development plan quickly, there should be none, but there is always
            something. From there I will implement the back end of the home
            screen, allowing actions for the buttons and interactivity. These
            should both take only a few days, with overlap to tweak the front
            end to mimic the back end. After this we will move forward to
            implementing the back end of the chart screen. This is the screen
            that will display the results of the storage test performed on the
            home screen. We are working on the back end first so we know what
            endpoints we are working with in the front end. The same goes for
            the loading screen, which will be implemented after the chart
            screen.{" "}
          </p>
          <p>Timeline</p>
          <p>
            Here is a screenshot of my Gantt Chart. In the future, this will be
            further broken down to reflect each class that is being implemented
            into this program.
          </p>
          <p>Dependencies</p>
          <p>
            {" "}
            The homepage has a relatively low number of dependencies, as it will
            be relatively static. It will display updates, but it does not need
            access to other parts of the program for its information. The scan
            in progress page will be dependent on the backend script to carry
            out the scan, as well as the script to report the progress of the
            scan. The readout page will be dependent on the endpoints that
            expose the information obtained in the scan, so it can be displayed
            to the user.
          </p>
          <p>Use of Tools</p>
          <p>
            {" "}
            To document this project, I will use Microsoft Project as well as
            Microsoft Visio. Microsoft Project will be used to create my visual
            timeline, as it is software built for scheduling projects and
            software I am familiar with. Visio will be used to create the use
            case and class diagrams. Visio is a chart making software that I am
            familiar with using. It provides intuitive design and will allow me
            to make the best diagrams possible. I have also used Figma to design
            a mockup of the front end, to further depict the plan for this
            application.
          </p>
          <p>System Design Document</p>
          <p>
            {" "}
            F-Secure’s new mobile application, F-Protect, is an application for
            Android devices. F-Protect aims to be a fully-fledged mobile
            security suite. This will be achieved over time with a Software as a
            Service (SaaS) methodology. This means that users pay a monthly or
            yearly fee to subscribe to our service, allowing us to fund
            continuous research and development to add new features and
            protection to F-Protect. With that said, the initial goal of
            F-Protect will be to release a smooth and intuitive user interface
            that is expandable and will allow for more features in the future.
            We intend to release a product with the ability to run a system scan
            and to neatly display results. Any that is delivered by the due date
            will be further detailed in the constraints section. In the future
            we may develop an iOS application, but that is not in the scope of
            this project.
          </p>
          <p>Requirements</p>
          <p>
            {" "}
            This system shall run on Android 10+ devices. This system shall
            provide users with a clean interface to interact with the
            application. This system shall run device storage scans and report
            file type and size to the user in a readable manner. This system
            shall require android permissions to access storage. This system
            shall be secure by not accessing any unnecessary Android
            Permissions.{" "}
          </p>
          <p>Constraints</p>
          <p>
            {" "}
            There are two major constraints in this project, Android
            Permissions, and time. As Android is open source, we should be able
            to obtain any permissions that are necessary for this app. In the
            release state of the application, we should only need permissions to
            storage, which is easy. In the future we may need to plan how to
            securely access more in-depth information without compromising the
            security steps that Android has in place by default.{" "}
          </p>
          <p>
            {" "}
            Time is an important constraint. While our SaaS design model allows
            us a little more flexibility than a product that needs to be
            released with all functionalities at the start, we are developing a
            security application which needs a lot of care put into the
            features. As F-Protect is a security application, it may have access
            to parts of the operating system that another app will not. This
            means that any compromises in F-Protects design could potentially
            open the entire mobile device to failure. The services we offer at
            the start will need to be over-engineered and very secure.
          </p>
          <p>Resources</p>
          <p>
            {" "}
            To create this application, the team will need Windows 10 or 11
            workstations that can run Android Studio, as well as virtualize an
            Android 10 device. Per the Android Studio documentation, users will
            need at least the following specs:
          </p>
          <p>64-bit Microsoft® Windows® 8/10/11</p>
          <p>
            x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD
            CPU with support for a Windows Hypervisor
          </p>
          <p>8 GB RAM or more</p>
          <p>
            8 GB of available disk space minimum (IDE + Android SDK + Android
            Emulator)
          </p>
          <p>1280 x 800 minimum screen resolution</p>
          <p>
            As we are developing for Android 10+ we will want more headroom than
            the minimum requirements. For final testing we will use a Pixel 8
            Pro, to confirm the application runs on real hardware.
          </p>
          <p>System Overview</p>
          <p>
            {" "}
            Our project will be entirely developed in Android Studio.
            Fortunately, Android Studio contains all the tools we will need.
            This includes the code editor, Gradle, virtualization, testing, and
            more.{" "}
          </p>
          <p>
            The following image is a very broad example of a UML Diagram for
            F-Secure. This depicts the functions of each button and what can
            happen when each is pressed.
          </p>
          <p>Documented Detailed Design</p>
          <p>
            Following this section are rough design templates for each screen.
            In this mockup, the background color is #271D1D, the foreground is
            #3E3434 and the text and SVG icons are #CFD4E7. Colors are subject
            to change during proper development. These designs show an
            application with three main screens as well as a fourth settings
            screen. They currently have placeholder text where the developed
            information and charts will show.{" "}
          </p>
          <p>
            There are three buttons at the bottom. Home on the left, settings on
            the right, and a placeholder context button in the middle. This
            button will change functions depending on what screen the user is
            on. The button on the home screen will be to run the test. Pressing
            this button will activate a function that searches through the
            device’s storage and provides a report based on what is found. The
            button will also call a function that changes the visible screen, so
            the user sees that the scan is in progress. Once the scan is in
            progress the context button will become a stop button, to cancel the
            scan if necessary. When the scan is completed, a flag will be raised
            to tell the app to switch to the scan complete screen. On the scan
            complete screen, the context button will be to open the device’s
            storage settings, so the user can quickly make advised changes.
          </p>
          <img src="src\assets\images\415FirstBoot.png" />
          <img src="src\assets\images\415Settings.png" />
          <img src="src\assets\images\415ScanComplete.png" />
        </div>
      ),
    },
    Sources: {
      content: (
        <div>
          <p>
            “Download and Install Android Studio.” <em>Android Developers</em>,
            developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio.
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
            Project Plan and System Design Project
          </h1>
          <section className="mb-8">{sections.MainContent.content}</section>
        </div>
      );
  }
};

export default IT415FinalProjectII;
