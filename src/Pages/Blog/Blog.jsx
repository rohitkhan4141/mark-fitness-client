import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className='w-10/12 mx-auto mt-10'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Blog</title>
      </Helmet>
      <h1 className='text-4xl text-center mb-10'>Blog</h1>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the Difference between SQL and NoSQL?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              SQL dialects share many properties though they interface with
              distinct databases. Flavors of NoSQL vary far more across their
              attendant systems, so comparison can be more useful between
              multiple non-relational technologies vs. SQL generally. Perhaps
              the most recognizable SQL dialect is MySQL, an open source and
              free RDBMS (though available through proprietary licenses as
              well). Its use is widespread in web applications, and it is known
              for compatibility, support, and good performance in the average
              case. MySQL has also made concessions to NoSQL practitioners with
              features like a JSON data type, the “Document Store,” and support
              for sharding (horizontal scaling). On the non-relational side,
              MongoDB is primarily a document store containing JSON-like
              structures and a JavaScript interface. It’s known for being
              user-friendly (less administration overhead), performant for
              simple queries, and flexible thanks to its NoSQL underpinnings.
              Great for hierarchical data storage, it also supports familiar
              relational concepts from indexing, to aggregation, to some measure
              of ACID compliance. Like MySQL, it is compatible with many
              platforms and programming environments, despite relative recency.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is JWT, and how does it work?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the difference between javascript and NodeJS?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How does NodeJS handle multiple requests at the same time?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Blog;
