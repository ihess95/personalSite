import React from "react";

interface it431FinalProjectProps {
  mode?: "reflection" | "abstract" | "full" | "sources";
}

const it431FinalProject: React.FC<it431FinalProjectProps> = ({
  mode = "full",
}) => {
  const sections = {
    Abstract: {
      type: "abstract",
      content: (
        <div>
          This project analyzes the distributed systems of a small retail
          establishment with multiple locations. This chain, Books-R-Us is
          looking to expand their locations, while making their inventory
          database more scalable and unified across all stores. This allows an
          employee at any of their locations to look up the whole inventory of
          the company and see if there is product available at another location.
        </div>
      ),
    },
    Reflection: {
      type: "reflection",
      content: (
        <div>
          <p>
            {" "}
            In this project, I analyze their case, and provide a plan to unify
            their database system, accomplishing all their goals. I recommend a
            client-server system, where the server is hosted on the cloud,
            allowing for scalability, easy network security (provided by the
            cloud host), and easy setting up of new locations. I also recommend
            this to be a two-layer system architecture, which can be more
            complicated than other options, but is generally faster. I explain
            that each location should have a secured LAN and WLAN, using a star
            topology for efficiency and cost effectiveness. I explain
            object-oriented development environments for the inventory software
            and advise a Java environment due to its ubiquitousness and ease of
            hiring talent.
          </p>
          <p>
            This is a very in-depth project, and it taught me more than I can
            explain here. The most important lesson I learned from this was
            applying what I have learned in college into one big case study. I
            had to put my learned knowledge into practice. This artifact showed
            me how to apply more complicated IT and networking skills to advise
            a business in the real world.
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
            <strong>Books-R-Us Distributed System Recommendation</strong>
          </p>
          <p>Ian Hess</p>
          <p>Southern New Hampshire University</p>
          <p>IT-431 Software Development Distributed Systems</p>
          <p>Professor Curtis Hines</p>
          <p>June 21, 2024</p>
          <p>
            Books-R-Us is a growing book retailer based in the Northeast.
            Books-R-Us wants to unify their inventory system across all stores.
            Accomplishing this will allow each store to instantly access an
            accurate inventory across all stores in real time. In addition to
            this, Books-R-Us would like to add e-commerce to its website,
            allowing customers to purchase merchandise and pick it up from a
            nearby store. To accommodate these goals, we recommend a
            client-server system with a two-tier architecture. As with any
            project that fundamentally changes operations, there will be
            challenges and potential complications while implementing this new
            system. In the upcoming literature, we will give recommendations to
            minimize potential challenges.
          </p>
          <p>
            {" "}
            A client-server system is the best fit for Books-R-Us as it offers
            great scalability for future storefronts and unified access to an
            inventory system. In a client-server system, each computer that a
            user has access to will be a client. A client is a device that
            requests information from a server. Adopting a client-server system
            will allow each client at any store to access the same inventory
            that is hosted on the server. When a client makes a change to the
            inventory, be it adding new inventory or removing old inventory or
            anything else, the request to make these changes will be sent to the
            server. The server will then apply the updates so when another
            client looks at inventory they see the accurate count.
          </p>
          <p>
            A client-server distributed system is the optimal choice for
            Books-R-Us, but it is not without its downsides. This type of system
            is necessarily connected to the internet. It must be connected to
            the internet to be accessible to any Books-R-Us store. Any computer
            that is connected to the internet is inherently less secure than one
            that is not exposed to the world wide web. Storing the inventory
            server in a remote location will lead to connectivity problems,
            which can be mitigated through proper provisioning. There will be
            potential for inventory updates to not go through as intended. This
            can be remedied with a well-built inventory software.
          </p>
          <p>
            Without a proper cyber security posture, the system could become
            compromised, leading to inaccurate inventory or much worse. The
            clients need antivirus software and employees will need regular
            basic cyber security training. Employees are the first line of
            defense in cyber security, and an uninformed employee can
            unknowingly make catastrophic errors. The server will need to be
            behind a strict firewall that only allows communication from the
            IP’s and MAC addresses of each machine. The server should also only
            accept traffic on ports 80 and 443, which are the ports reserved for
            HTTP and HTTPS respectively. As the server is only currently hosting
            our inventory, which will be accessed through HTTP/S requests, we do
            not need to accept traffic from any other port. If, in the future,
            we use the inventory server to host other services, other ports will
            need to be opened.
          </p>
          <p>
            There are two good options that Books-R-Us should consider for
            storing their remote server. Either buy a server and implement it in
            a centralized location so each store can access it with relatively
            low latency or use cloud hosting. If a physical server is opted for,
            as Books-R-Us grows we will need to add servers in multiple
            locations to scale properly. Books-R-Us will also need to invest in
            off-site storage back-ups in case anything happens to the server, as
            well as battery back-ups to keep the server active when the power
            goes out. A cloud server will be more expensive in the long run as
            you pay monthly vs paying for equipment, but it offers many
            advantages that traditional server hardware does not. Cloud servers
            will scale as the company does, will have a layer of existing
            security and will have guaranteed uptime. We advise the cloud server
            option, as the business is growing and plans to scale up.
          </p>
          <p>
            With many different clients accessing the same inventory software on
            the server, there is a possibility of application errors. For
            instance, if a user tries to update the inventory but the
            communication is interrupted and the changes are not saved, the
            inventory will not be accurate. Another possibility is if two
            clients are trying to access the same part of inventory at the same
            time. Their changes may conflict, or they could sell the same copy
            of a book at the same time, causing a headache. While these
            situations are abnormal, it is possible that they could happen, and
            therefore should be planned around. Our inventory software will be
            built to navigate these issues. It could be as simple as if one
            client is accessing a product in inventory, another user cannot.{" "}
          </p>
          <p>
            We advise a two-layer system architecture, this will provide the
            perfect balance of speed and usability while remaining cost
            effective. A two-layer system avoids having an established
            application layer in between the client and the server. This makes
            two-layer systems faster, but potentially more complicated as the
            application layer must be divided between client and server instead
            of on a bespoke machine. This will be handled by our inventory
            software as well. We can invest in an inventory software that runs
            on the server and on the client, allowing clients to use the
            client-side application as a window to the server-side application.
          </p>
          <p>
            Books-R-Us requires a scalable, consistent, unified inventory system
            to support their growing business. The best way for them to achieve
            this is to implement a two-layer, cloud-hosted, client-server
            distributed system. No system is perfect, but this one will address
            all needs of Books-R-Us while minimizing potential pitfalls.
          </p>
          <p>
            Books-R-Us plans to adopt a distributed system with a two-layer
            client-server architecture. While this is the best solution for
            accomplishing Books-R-Us’ future development plans, there are
            precautions that need to be taken. In its current configuration
            Books-R-Us requires very little network and cyber security
            configurations. The updated system architecture will need certain
            network provisioning and a modern cyber security posture. This
            proposal will provide guidance on network and security
            infrastructure.
          </p>
          <p>
            {" "}
            There are many variables to consider while designing network
            infrastructure for a modern company. Books-R-Us is a burgeoning
            bookstore chain that plans on unifying their inventory systems
            across all locations. They also include a cozy café where free Wi-Fi
            is available to patrons. Every store will have the same general
            network set up so an IT professional who is helping maintain the
            network will know what they are walking into at any location. A
            proposed network will have to plan for these specifications as well
            as guarantee low downtime.
          </p>
          <p>
            {" "}
            Each store will have a local area network (LAN), as well as a
            password protected wireless local area network (WLAN). We will
            implement a star network topology, which is one where all computers
            connect to a central network switch. This is the best choice vs
            other topologies as it provides the highest level of stability and
            performance for the least cost. Most small businesses and store
            fronts have a similar configuration. A switch will be stored in the
            network closet and will connect to the internet service provider’s
            outside connection via a router. The switch will then send internet
            traffic to its local destination. The switch is the device that all
            our network traffic will go through, local, or external. As the
            switch is such a vital part of each operation, it will be plugged
            into a battery back up to provide a conditioned power signal and
            provide extended uptime in the event of power issues. Wireless
            access points will connect to the switch, as well as any hard-wired
            terminal or point of sale system. The access points will be placed
            to maximize coverage for each store, whether it is decided to limit
            wireless access to the café eating area, or to provide wireless
            across the whole storefront. Since every computer and point of sale
            system is connected to the internet via the switch, they will all be
            able to access the central server and inventory system. This is
            important for a smooth, unified distributed system that applies to
            all stores instead of each store. These benefits do not come without
            a downside, however. With the increased capability and freedom
            provided by connecting each computer to the outside internet comes a
            huge potential security risk. The same can be said for running a
            public wireless network.
          </p>
          <p>
            {" "}
            There are companies that specialize in small business switching and
            access points. Books-R-Us should utilize these brands to create
            their network. Examples are Ubiquiti and Aruba. These companies
            provide switches that have easy to use web portals, allowing unified
            management from any location. These devices are secure and will
            allow Books-R-Us to have a lean IT department that can maintain the
            network in any store. These devices are preconfigured with a guest
            WLAN that Books-R-Us cafés will benefit from, allowing easy
            provision of guest networks.
          </p>
          <p>
            {" "}
            Internet security is not to be taken lightly, especially for a
            business that is publicly accessible and stores customer
            information. A firewall is the first line of defense in our security
            posture. The firewall sits between the router and the switch and
            monitors incoming and outgoing traffic. IT professionals configure
            rules for a firewall, which then checks all traffic to ensure it
            abides by the rules. For instance, if our system only needed access
            to email, we would block all traffic that goes to internet ports
            that are not used for email. In our case, we will close all ports
            that are not used for HTTP/S, email, S/FTP, SSH, RDP, and DNS. If we
            run into issues caused by the firewall being too strict, we will
            adjust the security rules. Our web server that is in a central
            location and hosts our website will be the most exposed of our
            systems. This server will be put behind its own firewall that only
            allows HTTP/S connections. We can also create a MAC address filter
            to apply to the LAN at each store. This looks at the hardware trying
            to connect to the network, checks to see if it is whitelisted, and
            approves or denies traffic accordingly. This will prevent anyone
            from connecting any computer to an exposed ethernet cable.{" "}
          </p>
          <p>
            {" "}
            Our Wi-Fi will be sequestered in its own virtual LAN (VLAN). A VLAN
            allows a singular switch to be divided into virtual networks, making
            it so devices connected to one VLAN cannot see devices on other
            VLANs. It is important to do this so a device connected to our
            wireless network cannot see our internal infrastructure or access
            local computers. We will set up a wireless network with WPA2, the
            current standard wireless encryption. The password for the Wi-Fi be
            automatically reset daily, preventing abuse of our network.
          </p>
          <p>
            {" "}
            In addition to hardware and software security standards, it is
            important to provide employee training as well as physical security.
            Employees are the easiest part of a network to compromise. A
            well-meaning employee who does not know any better can easily be
            taken advantage of. Regular cyber security training is the best way
            to avoid such situations. Phishing emails, bad actors posing as
            vendors, or improper desk hygiene can compromise even the most
            technically secure network. Phishing emails are emails designed to
            socially engineer ways to get confidential information from those
            who know it. Teaching employees how to spot such emails can save the
            company a lot of future strife. Most companies use third party
            vendors for services, especially small to medium businesses like
            Books-R-Us. If Books-R-Us utilizes these, it is easy for a hacker to
            observe vendors, disguise themselves as one, and gain access to
            restricted areas. Again, employees can be trained to spot these
            suspects. Maintaining a relationship with these vendors, keeping
            accurate records of who has been in the building and what they were
            supposed to do, and even surveillance cameras can diminish the
            possibility of such a compromise. All important network hardware
            should be kept behind a locked door that only those who need keys to
            it should have. The network closet should NOT be a shared space.
            Many companies try to utilize their space as best as possible,
            storing non-network equipment in the network closet. This is not
            ideal and should be avoided to prevent unnecessary traffic in secure
            areas.
          </p>
          <p>
            Books-R-Us needs to choose an object-oriented development
            environment for their server. A server hosts middleware that is
            designed to make using the server easier. Instead of interacting
            directly with the server, a user interacts with the middleware,
            which then makes the appropriate changes on the server. There are
            many factors to consider when a growing company chooses a server
            environment. Factors such as availability of people experienced in
            the environment, cost, and ease of development among other things.
            Choosing an environment is a commitment. While changes could be made
            in the future, performing a radical switch away from server
            architecture can be a very expensive gamble. By choosing the right
            fit in the beginning, we can save the company from potentially
            wasting time and money.Two of the most popular options are Jakarta
            EE (formerly J2EE) and .Net. Both are viable options, but for the
            reasons covered in this recommendation, Books-R-Us should use the
            Jakarta EE environment.
          </p>
          <p>
            {" "}
            Jakarta EE and .Net started in very different places, but have come
            to be very similar, and offer some of the greatest potential for
            designing server-side middleware. Jakarta EE runs with Java, which
            is one of the pillars of object-oriented programming languages.
            Companies such as IBM, Oracle and Red Hat utilize Java and help make
            new updates to Jakarta EE. Java is open source but supported by
            Oracle.{" "}
          </p>
          <p>
            {" "}
            .Net is also open source but supported by Microsoft. .Net used to be
            Windows only but recently Linux support was released for .Net. Prior
            to this update, I would have recommended Jakarta EE, as Linux can be
            very useful and cost effective for servers. Many major companies use
            .Net, including Microsoft, Chipotle, Stack Overflow and more.{" "}
          </p>
          <p>
            {" "}
            Linux servers are important for a growing business, as Linux is a
            free operating system. This allows scalability for a server. If
            using more modern technologies like Kubernetes or Chef, new servers
            can be created to scale with demand. These nodes are self-contained
            and can be created or destroyed to allow for traffic. As Books-R-Us
            grows this will become more important, and the added capacity to
            scale that Linux allows is paramount.
          </p>
          <p>
            As .Net and Jakarta EE have both been open sourced, become free to
            use and multiplatform, one of the greatest variables has become the
            language itself. Jakarta EE uses Java, and .Net uses C#. Both
            languages are well respected and represented in the industry, with
            Java being more common. These languages themselves are similar, but
            C# uses less boilerplate. While this may make it sound like C# is
            faster to develop with than Java. This is not necessarily true, as
            there are extensive libraries that can make development quicker and
            experienced Java developers will know how to develop efficiently.
          </p>
          <p>
            {" "}
            One of the most important differences between these environments is
            the number of developers for either. Java and C# are both well used,
            but C# is more commonly used in game development, and Java is one of
            the most popular server-side languages according to these two
            studies (<em>Stack Overflow Developer Survey 2023</em>, n.d.) and
            (W3Techs, 2020). These are surveys carried out by two of the largest
            communities of developers online. This will make hiring developers
            easier. As Java is so ubiquitous, there is less of a possibility of
            it becoming archaic in the future. There are so many Java
            programmers now that a server with Java based middleware will be
            supported for long to come. This may be true for C# as well, as it
            has the juggernaut Microsoft behind it, but it may be harder to find
            developers to support the server.
          </p>
          <p>
            {" "}
            Books-R-Us should choose the Jakarta EE platform for their servers.
            Both .Net and Jakarta EE are important server-side environments with
            long histories. Jakarta EE is open source and well established. Java
            is one of the most popular server-side languages. This means if
            Books-R-Us chooses Jakarta EE, there will be no shortage of support
            and potential developers to employ. Jakarta EE and Java are the
            reliable path into the future for Books-R-Us.
          </p>
          <p>
            {" "}
            As previously mentioned, Books-R-Us will need a new, centralized
            server to host the inventory system, the new website, and any web
            services they will need to make their operation run. The best, most
            modern solution is a cloud hosted server. With a cloud server, no
            physical hardware is bought, the company will pay for an allotment
            from a cloud provider. Their application is then uploaded to this
            virtual server and can be accessed from any Books-R-Us location.
            This can be more expensive than a traditional hardware server, as
            the charges are recurring, but cloud servers have many upsides that
            Books-R-Us will benefit from.{" "}
          </p>
          <p>
            {" "}
            Firstly, no hardware needs to be maintained. If there is not a cloud
            outage from the provider, the server will be up. If power goes out
            at a Books-R-Us site, it will not affect the server. The server can
            be accessed from any computer where an administrator can log in.
            While paying for a server up front can be cost effective, that
            server will need to be replaced eventually and buying a new server
            and rolling over the stored information can be slow and costly. This
            is avoided by a cloud server.
          </p>
          <p>
            {" "}
            Cloud servers offer easy scalability. If Books-R-Us gains traction
            and their cloud allotment does not cover the overhead they need,
            they can simply upgrade their subscription. This is easier than a
            traditional server upgrade and will cause no downtime. When a
            traditional server is upgraded, the server must be turned off, which
            is not ideal, and then parts must be replaced. Only parts that work
            with the existing hardware can be used.
          </p>
          <p>
            {" "}
            With cloud servers, Books-R-Us will not have to worry about where
            they open new locations. If Books-R-Us only had one centrally
            located server, the further a location is from the server, the less
            reliable connection will be. With cloud this still exists, but
            Books-R-Us will be able to choose where they want their server to be
            stored in the cloud. They can opt for multiple nodes if necessary.
            This is much more convenient than provisioning another physical
            server in another location.
          </p>
          <p>
            {" "}
            We recommend Books-R-Us implements a two-layer client-server
            distributed system. This system will run on a cloud platform for
            easy maintenance, security and scalability. The distributed system
            will be object oriented in design and run in the Jakarta EE platform
            and be written in Java. Each individual store is powered by a
            Ubiquiti small business network, complete with guest Wi-Fi for café
            customers. By following this plan, Books-R-Us will be propelled into
            the modern age of book stores.
          </p>
        </div>
      ),
    },
    Sources: {
      content: (
        <div>
          <p>
            <em>.NET customers showcase | See what </em>
            <em>devs</em>
            <em> are building</em>. (n.d.). Microsoft.
            https://dotnet.microsoft.com/en-us/platform/customers
          </p>
          <p>
            Guindon, C. (n.d.).{" "}
            <em>
              Jakarta® EE | Cloud Native Enterprise Java | Java EE | the Eclipse
              Foundation | The Eclipse Foundation
            </em>
            . Jakarta® EE: The New Home of Cloud Native Java.{" "}
          </p>
          <p>
            W3Techs. (2020).{" "}
            <em>
              Usage Statistics and Market Share of Server-side Programming
              Languages for Websites, January 2020
            </em>
            . W3techs.com.
            https://w3techs.com/technologies/overview/programming_language
          </p>
          <p>
            <em>Stack Overflow Developer Survey 2023</em>. (n.d.). Stack
            Overflow.
            https://survey.stackoverflow.co/2023/#most-popular-technologies-language-prof
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
            Distributed System Recommendation Project
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

export default it431FinalProject;
