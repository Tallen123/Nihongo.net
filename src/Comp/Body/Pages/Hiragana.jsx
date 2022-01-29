import React from 'react';
import OutCard from '../../Card/OutCard';

function Hiragana() {

  return (
<div>
  <div className='Pannel'>
        <h1>Hiragana / ひらがな</h1>
        <h3>Click on a card to hear the character.</h3>
        <h3>some characters may be quiter than others due to the speech Synthesis we are using.</h3>
    </div>

  <div className="Pannel">{/*Basic Hiragana*/}
    <h1>Basic Hiragana</h1>
    <div className="grid">
          <OutCard TopText={"あ"} BottomText={"a"}/>
          <OutCard TopText={"い"} BottomText={"i"}/>
          <OutCard TopText={"う"} BottomText={"u"}/>
          <OutCard TopText={"え"} BottomText={"e"}/>
          <OutCard TopText={"お"} BottomText={"o"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"か"} BottomText={"ka"}/>
          <OutCard TopText={"き"} BottomText={"ki"}/>
          <OutCard TopText={"く"} BottomText={"ku"}/>
          <OutCard TopText={"け"} BottomText={"ke"}/>
          <OutCard TopText={"こ"} BottomText={"ko"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"さ"} BottomText={"sa"}/>
          <OutCard TopText={"し"} BottomText={"shi"}/>
          <OutCard TopText={"す"} BottomText={"su"}/>
          <OutCard TopText={"せ"} BottomText={"se"}/>
          <OutCard TopText={"そ"} BottomText={"so"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"た"} BottomText={"ta"}/>
          <OutCard TopText={"ち"} BottomText={"chi"}/>
          <OutCard TopText={"つ"} BottomText={"tsu"}/>
          <OutCard TopText={"て"} BottomText={"te"}/>
          <OutCard TopText={"と"} BottomText={"to"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"な"} BottomText={"na"}/>
          <OutCard TopText={"に"} BottomText={"ni"}/>
          <OutCard TopText={"ぬ"} BottomText={"nu"}/>
          <OutCard TopText={"ね"} BottomText={"ne"}/>
          <OutCard TopText={"の"} BottomText={"no"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"は"} BottomText={"ha"}/>
          <OutCard TopText={"ひ"} BottomText={"hi"}/>
          <OutCard TopText={"ふ"} BottomText={"fu"}/>
          <OutCard TopText={"へ"} BottomText={"he"}/>
          <OutCard TopText={"ほ"} BottomText={"ho"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"ま"} BottomText={"ma"}/>
          <OutCard TopText={"み"} BottomText={"mi"}/>
          <OutCard TopText={"む"} BottomText={"mu"}/>
          <OutCard TopText={"め"} BottomText={"me"}/>
          <OutCard TopText={"も"} BottomText={"mo"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"や"} BottomText={"ya"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
          <OutCard TopText={"ゆ"} BottomText={"yu"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
          <OutCard TopText={"よ"} BottomText={"yo"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"ら"} BottomText={"ra"}/>
          <OutCard TopText={"り"} BottomText={"ri"}/>
          <OutCard TopText={"る"} BottomText={"ru"}/>
          <OutCard TopText={"れ"} BottomText={"re"}/>
          <OutCard TopText={"ろ"} BottomText={"ro"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"わ"} BottomText={"wa"}/>
          <OutCard TopText={"ゐ"} BottomText={"wi"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
          <OutCard TopText={"ゑ"} BottomText={"we"}/>
          <OutCard TopText={"を"} BottomText={"wo"}/>
      </div>
      <div className="grid">
          <OutCard TopText={"ん"} BottomText={"n"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
          <OutCard TopText={"　"} BottomText={"　"}/>
      </div>
  </div>

  <div className='Pannel'>{/*Hiragana Dakuten*/}
    <h1>Hiragana <br /> Dakuten</h1>
    <div className='grid'>
      <OutCard TopText={"が"} BottomText={"ga"}/>
      <OutCard TopText={"ぎ"} BottomText={"gi"}/>
      <OutCard TopText={"ぐ"} BottomText={"gu"}/>
      <OutCard TopText={"げ"} BottomText={"ge"}/>
      <OutCard TopText={"ご"} BottomText={"go"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"ざ"} BottomText={"za"}/>
      <OutCard TopText={"じ"} BottomText={"ji"}/>
      <OutCard TopText={"ず"} BottomText={"zu"}/>
      <OutCard TopText={"ぜ"} BottomText={"ze"}/>
      <OutCard TopText={"ぞ"} BottomText={"zo"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"だ"} BottomText={"da"}/>
      <OutCard TopText={"ぢ"} BottomText={"ji"}/>
      <OutCard TopText={"づ"} BottomText={"zu"}/>
      <OutCard TopText={"で"} BottomText={"de"}/>
      <OutCard TopText={"ど"} BottomText={"do"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"ば"} BottomText={"ba"}/>
      <OutCard TopText={"び"} BottomText={"bi"}/>
      <OutCard TopText={"ぶ"} BottomText={"bu"}/>
      <OutCard TopText={"べ"} BottomText={"be"}/>
      <OutCard TopText={"ぼ"} BottomText={"bo"}/>
    </div>
  </div>

  <div className='Pannel'>{/*Hiragana Handakuten*/}
    <h1>Hiragana <br /> Handakuten</h1>
    <div className='grid'>
      <OutCard TopText={"ぱ"} BottomText={"pa"}/>
      <OutCard TopText={"ぴ"} BottomText={"pi"}/>
      <OutCard TopText={"ぷ"} BottomText={"pu"}/>
      <OutCard TopText={"ぺ"} BottomText={"pe"}/>
      <OutCard TopText={"ぽ"} BottomText={"po"}/>
    </div>
  </div>

  <div className='Pannel'>{/*Modified Hiragana*/}
    <h1>Modified <br /> Hiragana</h1>
    <div className='grid'>
      <OutCard TopText={"きゃ"} BottomText={"kya"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"きゅ"} BottomText={"kyu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"きょ"} BottomText={"kyo"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"しゃ"} BottomText={"sha"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"しゅ"} BottomText={"shu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"しょ"} BottomText={"sho"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"ちゃ"} BottomText={"cha"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"ちゅ"} BottomText={"chu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"ちょ"} BottomText={"cho"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"にゃ"} BottomText={"nya"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"にゅ"} BottomText={"nyu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"にょ"} BottomText={"nyo"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"ひゃ"} BottomText={"hya"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"ひゅ"} BottomText={"hyu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"ひょ"} BottomText={"hyo"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"ふぁ"} BottomText={"fa"}/>
      <OutCard TopText={"ふい"} BottomText={"fi"}/>
      <OutCard TopText={"ふ"} BottomText={"fu"}/>
      <OutCard TopText={"ふぇ"} BottomText={"fe"}/>
      <OutCard TopText={"ふぉ"} BottomText={"fo"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"みゃ"} BottomText={"mya"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"みゅ"} BottomText={"myu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"みょ"} BottomText={"myo"}/>
    </div>
    <div className='grid'>
      <OutCard TopText={"りゃ"} BottomText={"rya"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"りゅ"} BottomText={"ryu"}/>
      <OutCard TopText={"　"} BottomText={"　"}/>
      <OutCard TopText={"りょ"} BottomText={"ryo"}/>
    </div>
    <h1>If you feel anything is missing please contact us!</h1>
  </div>
</div>
    );
}

export default Hiragana;