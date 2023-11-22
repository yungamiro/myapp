import React from "react";

class VowelCounter extends React.Component {
  countVowels(txt) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < txt.length; i++) {
      if (vowels.includes(txt[i])) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  render() {
    const txts = [
      "jdhqgdqsghdakzejamazemlqksd",
      "Lorem ipsum dolor sit amet consectetur.",
      "L’imagination gouverne le monde.",
      "zzzZZZzz"
    ];

    const results = txts.map((txt, index) => {
      const vowelCount = this.countVowels(txt);
      return (
        <div key={index}>
          <p>{txt}</p>
          <p>Vowel Count: {vowelCount}</p>
        </div>
      );
    });

    return <div>{results}</div>;
  }
}

export default VowelCounter;
