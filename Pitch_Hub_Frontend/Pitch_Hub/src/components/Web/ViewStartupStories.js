import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Card, CardImg } from "react-bootstrap";
import Navbar1 from "./Navbar";

// Sample startup stories data
const startupStories = [
  {
    name: "LinkedIn",
    description: "Founded by Reid Hoffman and a group of entrepreneurs in 2002, LinkedIn began as a platform for professional networking. Today, it’s the largest professional network globally, connecting millions of people and transforming career growth and recruitment.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    founded: "2002",
    founders: ["Reid Hoffman", "Allen Blue", "Konstantin Guericke", "Eric Ly", "Jean-Luc Vaillant"],
    funding: "Initial investment of $4.7M, raised $10M in 2004 and $53M in 2006",
    majorEvents: [
      "2003 - LinkedIn officially launched.",
      "2008 - First major revenue model introduced.",
      "2011 - LinkedIn IPO went public, raising $352M."
    ],
    achievements: [
      "Over 800 million members globally.",
      "Acquired by Microsoft for $26.2B in 2016."
    ]
  },
  {
    name: "PayPal",
    description: "Launched in 1998 by Peter Thiel, Max Levchin, and Elon Musk, PayPal aimed to make online payments secure and straightforward. It paved the way for digital financial transactions, eventually becoming a global giant in online payments and e-commerce.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    founded: "1998",
    founders: ["Peter Thiel", "Max Levchin", "Luke Nosek", "Elon Musk"],
    funding: "Acquired $12M in venture funding in 1999.",
    majorEvents: [
      "2002 - PayPal was acquired by eBay for $1.5B.",
      "2015 - PayPal split from eBay to operate as a standalone company."
    ],
    achievements: [
      "Over 392 million active accounts as of 2024.",
      "Acquired Braintree for $800M in 2013."
    ]
  },
  {
    name: "Uber",
    description: "In 2009, Travis Kalanick and Garrett Camp co-founded Uber, envisioning a convenient way to hail a ride from a smartphone. The company disrupted traditional transportation and set the stage for the gig economy, inspiring similar on-demand service models worldwide.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    founded: "2009",
    founders: ["Travis Kalanick", "Garrett Camp"],
    funding: "Raised $1.3 billion in 2014 at a $40 billion valuation.",
    majorEvents: [
      "2011 - Uber launched its ride-sharing service.",
      "2019 - Uber went public with a $82 billion valuation."
    ],
    achievements: [
      "Available in over 900 metropolitan areas worldwide.",
      "Acquired Postmates in 2020 for $2.65B."
    ]
  },
  {
    name: "Netflix",
    description: "Initially founded in 1997 by Reed Hastings and Marc Randolph as a DVD rental service, Netflix transformed itself into a streaming powerhouse. By investing in original content and leveraging data-driven decisions, Netflix revolutionized entertainment and popularized binge-watching.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    founded: "1997",
    founders: ["Reed Hastings", "Marc Randolph"],
    funding: "Acquired $40M in funding from investors in 2002.",
    majorEvents: [
      "2007 - Netflix introduced streaming services.",
      "2013 - Netflix won its first Primetime Emmy Award for 'House of Cards'."
    ],
    achievements: [
      "Over 230 million subscribers globally.",
      "First company to reach 200 million subscribers in 2020."
    ]
  },
  {
    name: "Pinterest",
    description: "Co-founded in 2010 by Ben Silbermann, Paul Sciarra, and Evan Sharp, Pinterest allowed users to 'pin' and organize images on virtual boards. It became a hub for inspiration in fashion, home décor, cooking, and more, empowering a visually driven community.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    founded: "2010",
    founders: ["Ben Silbermann", "Paul Sciarra", "Evan Sharp"],
    funding: "Raised $10M in 2011, totaling $553M by 2013.",
    majorEvents: [
      "2012 - Pinterest raised $100M in a funding round.",
      "2019 - Pinterest went public with a $10 billion valuation."
    ],
    achievements: [
      "Over 450 million monthly active users.",
      "Acquired Instapaper in 2016 for $9M."
    ]
  },
  {
    name: "Alibaba",
    description: "Jack Ma founded Alibaba in 1999, aiming to connect Chinese manufacturers with overseas buyers. Alibaba has since grown into an e-commerce empire, reshaping global trade with platforms that support retailers, consumers, and businesses alike.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg",
    founded: "1999",
    founders: ["Jack Ma", "Peng Lei"],
    funding: "Raised $25M in venture funding in 2000.",
    majorEvents: [
      "2003 - Launched Taobao, its online shopping platform.",
      "2014 - Alibaba went public with a $25 billion IPO."
    ],
    achievements: [
      "The largest e-commerce platform in the world by revenue.",
      "Acquired Lazada in 2016 for $1 billion."
    ]
  },
  {
    name: "OYO Rooms",
    description: "Launched in 2013 by Ritesh Agarwal, OYO Rooms started with a simple goal to standardize affordable hotel experiences in India. Today, OYO is one of the world’s largest hospitality chains, offering budget-friendly, reliable accommodations worldwide.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_%28logo%29.png",
    founded: "2013",
    founders: ["Ritesh Agarwal"],
    funding: "Raised $1.5M in seed funding in 2013, followed by $100M in 2015.",
    majorEvents: [
      "2014 - OYO launched in India.",
      "2019 - OYO became the world's third-largest hospitality chain."
    ],
    achievements: [
      "Over 23,000 properties across 80+ countries.",
      "Raised $1.5 billion in 2019 at a $10 billion valuation."
    ]
  },
  {
    name: "DoorDash",
    description: "Founded in 2013 by Stanford students Tony Xu, Stanley Tang, Andy Fang, and Evan Moore, DoorDash aimed to make food delivery more efficient. With a focus on partnering with local restaurants, DoorDash became a major player in the on-demand delivery space.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/DoorDash_Logo.svg",
    founded: "2013",
    founders: ["Tony Xu", "Stanley Tang", "Andy Fang", "Evan Moore"],
    funding: "Raised $2.4M in 2013, totaling $2.5B by 2020.",
    majorEvents: [
      "2015 - Expanded to 10 U.S. cities.",
      "2020 - DoorDash IPO went public with a $72 billion valuation."
    ],
    achievements: [
      "Serves over 4,000 cities across the U.S. and Canada.",
      "Acquired Caviar for $410M in 2019."
    ]
  },
  {
    name: "Zomato",
    description: "In 2008, Deepinder Goyal and Pankaj Chaddah founded Zomato in India to provide restaurant discovery and reviews. It evolved into a global food-tech leader, offering services like food delivery, restaurant reservations, and more, catering to millions across various countries.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg",
    founded: "2008",
    founders: ["Deepinder Goyal", "Pankaj Chaddah"],
    funding: "Raised $1M in seed funding in 2010, reaching $2B by 2021.",
    majorEvents: [
      "2013 - Zomato launched food delivery services.",
      "2021 - Zomato went public with a $13 billion valuation."
    ],
    achievements: [
      "Available in 24 countries.",
      "Acquired UrbanClap in 2020."
    ]
  },
  {
    name: "Stripe",
    description: "Irish brothers Patrick and John Collison founded Stripe in 2010 to simplify online payments for businesses. Stripe’s API made it easy for developers to embed payment processing, helping countless startups and large enterprises seamlessly manage payments online.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    founded: "2010",
    founders: ["Patrick Collison", "John Collison"],
    funding: "Raised $2M in seed funding, totaling $1.6B by 2020.",
    majorEvents: [
      "2011 - Stripe launched publicly.",
      "2019 - Stripe achieved a $35 billion valuation."
    ],
    achievements: [
      "Processing billions of dollars in payments annually.",
      "Acquired Paystack for $200M in 2020."
    ]
  },
  {
    name: "Instacart",
    description: "Founded in 2012 by Apoorva Mehta, Max Mullen, and Brandon Leonardo, Instacart quickly became a leader in grocery delivery services, making it easier for customers to shop online and have groceries delivered from local stores.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Instacart_logo_and_wordmark.svg",
    founded: "2012",
    founders: ["Apoorva Mehta", "Max Mullen", "Brandon Leonardo"],
    funding: "Raised $2.3M in 2012, totaling $1B in funding by 2018.",
    majorEvents: [
      "2015 - Expanded to major U.S. cities.",
      "2021 - Instacart announced a $39 billion valuation."
    ],
    achievements: [
      "Over 500,000 shoppers nationwide.",
      "Acquired Whole Foods delivery network in 2017."
    ]
  },
  {
    name: "Snapchat",
    description: "Snapchat was created in 2011 by Evan Spiegel, Bobby Murphy, and Reggie Brown as a fun messaging app where photos disappear after being viewed. Today, Snapchat is one of the most popular social media platforms, known for its disappearing messages, stories, and augmented reality features.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    founded: "2011",
    founders: ["Evan Spiegel", "Bobby Murphy", "Reggie Brown"],
    funding: "Raised $485K in seed funding, reached $1.3 billion by 2017.",
    majorEvents: [
      "2013 - Snapchat introduced Stories.",
      "2017 - Snapchat IPO went public at a $24 billion valuation."
    ],
    achievements: [
      "Over 300 million daily active users.",
      "Acquired Zenly for $250 million in 2017."
    ]
  },
  {
    name: "Spotify",
    description: "Founded by Daniel Ek and Martin Lorentzon in 2006, Spotify aimed to change the way people listened to music by offering a legal and user-friendly alternative to illegal downloading. It quickly became the most popular streaming service in the world, offering both free and premium subscriptions.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2024_Spotify_Logo.svg",
    founded: "2006",
    founders: ["Daniel Ek", "Martin Lorentzon"],
    funding: "Raised $1 million in seed funding in 2006, reaching $4 billion by 2016.",
    majorEvents: [
      "2008 - Spotify launched in Sweden and soon expanded globally.",
      "2018 - Spotify acquired Anchor and Gimlet Media."
    ],
    achievements: [
      "Over 200 million active users globally.",
      "Acquired Parcast and Anchor for $340 million in 2019."
    ]
  },
  {
    name: "Trello",
    description: "Trello, a visual collaboration tool for managing projects and tasks, was founded by Michael Pryor and Joel Spolsky in 2011. Its intuitive board-and-card system became a favorite tool for teams and individuals alike, helping users organize their work.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg",
    founded: "2011",
    founders: ["Michael Pryor", "Joel Spolsky"],
    funding: "Raised $10M in seed funding in 2013.",
    majorEvents: [
      "2014 - Acquired by Atlassian for $425M.",
      "2018 - Trello reached 50 million users."
    ],
    achievements: [
      "Used by over 50 million users globally.",
      "Acquired by Atlassian for $425 million in 2017."
    ]
  }
];

const ViewStartupStories = () => {
    const [show, setShow] = useState(false);
    const [selectedStory, setSelectedStory] = useState({});
  
    const handleCardClick = (story) => {
      setSelectedStory(story);
      setShow(true);
    };
  
    return (
      <>
        <Navbar1 />
        <Container>
          <h2 className="text-center mt-5">Established Startup Stories</h2>
          <Row xs={1} sm={2} md={3} lg={3} className="g-4 mt-4">
            {startupStories.map((story, index) => (
              <Col key={index}>
                <Card onClick={() => handleCardClick(story)}>
                  <div className="p-2">
                    <CardImg
                      top
                      src={story.imageUrl}
                      alt={story.name}
                      className="img-fluid"
                      style={{ height: "250px" }}
                    />
                    <h5 className="mt-2">{story.name}</h5>
                    <p>{story.description}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
  
          {/* Modal to show selected startup story details */}
          <Modal size="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Body>
              <h4>{selectedStory.name}</h4>
              <img
                src={selectedStory.imageUrl}
                alt={selectedStory.name}
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
              />
              <p>{selectedStory.description}</p>
              <h6>Founded: {selectedStory.founded}</h6>
              <h6>Founders: {selectedStory.founders?.join(", ")}</h6>
              <h6>Funding: {selectedStory.funding}</h6>
              <h6>Major Events:</h6>
              <ul>
                {selectedStory.majorEvents?.map((event, idx) => (
                  <li key={idx}>{event}</li>
                ))}
              </ul>
              <h6>Achievements:</h6>
              <ul>
                {selectedStory.achievements?.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  };
  
  export default ViewStartupStories;