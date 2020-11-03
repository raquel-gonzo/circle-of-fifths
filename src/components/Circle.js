import React from "react";
import Image from '../Image.png'

const Circle = () => {
  return (
    <div>
      {/* Image Map Generated by http://www.image-map.net/ */}
      <img src={Image} usemap="#image-map" />
      <map name="image-map">
        <area
          target="_blank"
          alt="C Major / a minor"
          title="C Major / a minor"
          href="https://flat.io/score/5fa076195c4ead2a68fa2d74-c-major-a-minor"
          coords="372,171,418,279"
          shape="rect"
        />
        <area
          target="_blank"
          alt="A Major / f# minor"
          title="A Major / f# minor"
          href="https://flat.io/score/5fa0832e2fbb8763d32327ed-a-major-f-minor"
          coords="754,396,656,394,653,419,592,421,554,420,555,447,652,441,651,466,754,465"
          shape="poly"
        />
        <area
          target="_blank"
          alt="E Major / c# minor"
          title="E Major / c# minor"
          href="https://flat.io/score/5fa08388f32c060e26bc3b33-e-major-c-minor"
          coords="740,536,738,606,627,607,626,568,595,568,572,547,521,526,533,502,558,515,622,550,630,533"
          shape="poly"
        />
        <area
          target="_blank"
          alt="B Major / g# minor"
          title="B Major / g# minor"
          href="https://flat.io/score/5fa083e230233d67f964508a-b-major-g-minor"
          coords="532,643,658,645,660,710,527,708,526,659,505,659,503,635,463,578,484,564,504,603"
          shape="poly"
        />
        <area
          target="_blank"
          alt="D♭ Major / b♭ minor"
          title="D♭ Major / b♭ minor"
          href="https://flat.io/score/5fa083e230233d67f964508a-b-major-g-minor"
          coords="280,709,168,709,167,646,253,647,254,627,276,628,297,563,323,562,290,633,279,660"
          shape="poly"
        />
        <area
          target="_blank"
          alt="A♭  Major / f minor"
          title="A♭  Major / f minor"
          href="https://flat.io/score/5fa0871f932c0733645ee36a-a-major-f-minor"
          coords="60,534,61,607,162,605,165,571,191,566,195,552,250,528,253,509,192,543,161,550,161,535"
          shape="poly"
        />
        <area
          target="_blank"
          alt="E♭ Major / c minor"
          title="E♭ Major / c minor"
          href="https://flat.io/score/5fa08790e9b80b50e3fc2d2d-e-major-c-minor"
          coords="37,394,38,464,132,462,132,442,177,441,232,442,229,423,131,422,130,393"
          shape="poly"
        />
        <area
          target="_blank"
          alt="B♭ Major / g minor "
          title="B♭ Major / g minor "
          href="https://flat.io/score/5fa087e714d0e461513cc82d-b-major-g-minor"
          coords="73,264,71,324,150,325,158,317,196,320,251,357,259,336,198,311,194,300,157,301,157,263"
          shape="poly"
        />
        <area
          target="_blank"
          alt="F Major / d minor"
          title="F Major / d minor"
          href="https://flat.io/score/5fa06f9f932c0733645ed863-f-major"
          coords="175,222,174,147,256,148,258,207,281,210,323,283,306,294,261,221"
          shape="poly"
        />
        <area
          target="_blank"
          alt="G Major / e minor "
          title="G Major / e minor "
          href="https://flat.io/score/5fa0772442a0334d54e14d6c-g-major-e-minor"
          coords="486,291,527,223,629,218,627,158,532,157,519,202,469,287"
          shape="poly"
        />
        <area
          target="_blank"
          alt="D Major / b minor"
          title="D Major / b minor"
          href="https://flat.io/score/5fa07d9630233d67f9644cf0-d-major-b-minor"
          coords="624,266,623,293,591,303,530,335,541,357,629,329,724,330,724,265"
          shape="poly"
        />
        <area
          onclick="func(this.dataset.flatio);"
          href="#"
          alt="G♭Major / e♭ minor"
          title="G♭Major / e♭ minor"
          data-flatio="https://flat.io/embed/5fa0866ffdc8885b55a586b3?appId=5fa09d9382a05c3a2f037111"
          coords="399,616,418,613,416,591,392,594,394,689,421,688,419,720,418,770,535,770,532,717,422,704,422,667,400,667"
          shape="poly"
        />
      </map>
    </div>
  );
};

export default Circle;