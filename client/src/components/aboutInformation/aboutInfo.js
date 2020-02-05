import React from "react";
import "./aboutInfoStyle.css";

/*
Component for displaying information about color vision deficiencies to users
*/
const AboutInfo = ({ toWhiteBackground, background }) => {
  //Data object for the pi graph

  if (background !== "white") {
    background = "white";
  }

  //Return statement for rendering the component
  return (
    <div className="aboutPage">
      <p className="mainTitle">Motor dexterity</p>
      <p className="center margin">
        Motor dexterity challenges that effect the upper extremities can have an
        impact on an individual's access to a computer. These upper extremities
        include the arm, wrist, hand, and fingers.
      </p>

      <p className="center thirdTitle">
        There are four main types of color vision deficiencies.
      </p>
      <div>
        <p className="center fourthTitle">Protanomaly (proht-n-om-uh-lee):</p>
        <p className="center margin">
          There is a reduced sensitivity to red light. Most people with this
          have issues distinguishing between reds, greens, browns, and oranges.
          There can also be confusion when comparing blues and purples to one
          another. This is one of the most common forms of a CDV.
        </p>
      </div>
      <div>
        <p className="center fourthTitle">
          Deuteranomaly (deu-ter-​anom-a-ly):
        </p>
        <p className="center margin">
          There is a reduced sensitivity to green light. Most people with this
          also have issues distinguishing between reds, greens, browns and
          oranges along with can confuse blues and purples when copmpared to one
          another. This is the other most common form of a CVD.
        </p>
      </div>
      <div>
        <p className="center fourthTitle">Tritanomaly (trī′tə-nŏm′ə-lē):</p>
        <p className="center margin">
          There is a reduced sensitivity to blue right. Most people with this
          have issues distinguishing between blue and yellow, violet and red,
          and blue and green. Most of the colors someone with this would see are
          pink, red, black, white, grey, and turquoise. This CVD is extremely
          rare.
        </p>
      </div>
      <div>
        <p className="center fourthTitle">Monochromacy (mon-o-chro-ma-cy):</p>
        <p className="center margin">
          Individuals with this deficiency can see no colors at all. Everything
          is a shade of grey that ranges between white and black. This is
          incredibly rare (approximately 1 in 33,000 people are diagnosed With
          this condition). Due to the range of colors these individuals can see,
          it can make some tasks in life difficult to preform.
        </p>
      </div>
      <p className="center fourthTitle">
        Each form of CVD has varying levels of severity.
      </p>
      <div>
        <p className="center fourthTitle">
          What, in the eye, is causing colors to be percieved in this way?
        </p>
        <p className="center margin">
          For individuals with Protanomaly, Deuteranomaly, and Tritanomaly, they
          are considered dichromatic, meaning that they only have two types of
          cones in their eyes to percieve colors. People without these
          deficiencies have three cones and each cone is responsible for
          percieving red, green, and blue. This is where the reduced sensitivity
          comes from, as the reduction in one cone causes a section of the color
          spectrum to not be viewable to the individual. This section happens to
          overlap for individuals with Protanomaly and Deuteranomaly, which is
          why some individuals may refer to their deficiency as 'red/green
          colorblindness', as these individuals may tend to see the world in
          very similar ways.
        </p>
      </div>
      <div>
        <p className="center fourthTitle">
          Causes of Color Vision Deficiencies:
        </p>
        <p className="center margin">
          Color Vision Deficiencies are normally caused by genetic conditions
          and are usually inheritied from an individual's parents. Men are more
          often impacted than women because the gene is carried in the X
          chromosome. There can be some other cases that cause color vision
          deficiencies however their causes are still being researched to
          determine the exact cause.
        </p>
      </div>
      <p className="center fourthTitle">
        At this moment in time, there is no cure to these deficiencies.
      </p>
      <p className="center fourthTitle">
        For more information, please visit the following websites:
      </p>
      <p className="center">
        <a
          href="http://watap.org/tourofat/computer-access-motor-dexterity"
          className="padding"
        >
          watap.org
        </a>
      </p>
      <p className="center">
        The information for this page was gathered from
        <a
          href="http://watap.org/tourofat/computer-access-motor-dexterity"
          className="padding"
        >
          watap.org
        </a>
      </p>
    </div>
  );
};

export default AboutInfo;
