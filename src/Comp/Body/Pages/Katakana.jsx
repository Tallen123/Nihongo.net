import React from 'react';
import OutCard from '../../Card/OutCard';

function Katakana() {
  return (
<div>

    <div className='Pannel'>
        <h1>Katakana / カタカナ</h1>
        <h3>Click on a card to hear the character.</h3>
        <h3>some characters may be quiter than others due to the speech Synthesis we are using.</h3>
    </div>
    <div className="Pannel">{/*Basic Katakana*/}
        <h1>Basic Katakana</h1>
        <div className="grid">
            <OutCard TopText={"ア"} BottomText={"a"}/>
            <OutCard TopText={"イ"} BottomText={"i"}/>
            <OutCard TopText={"ウ"} BottomText={"u"}/>
            <OutCard TopText={"エ"} BottomText={"e"}/>
            <OutCard TopText={"オ"} BottomText={"o"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"カ"} BottomText={"ka"}/>
            <OutCard TopText={"キ"} BottomText={"ki"}/>
            <OutCard TopText={"ク"} BottomText={"ku"}/>
            <OutCard TopText={"ケ"} BottomText={"ke"}/>
            <OutCard TopText={"コ"} BottomText={"ko"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"サ"} BottomText={"sa"}/>
            <OutCard TopText={"シ"} BottomText={"shi"}/>
            <OutCard TopText={"ス"} BottomText={"su"}/>
            <OutCard TopText={"セ"} BottomText={"se"}/>
            <OutCard TopText={"ソ"} BottomText={"so"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"タ"} BottomText={"ta"}/>
            <OutCard TopText={"チ"} BottomText={"chi"}/>
            <OutCard TopText={"ツ"} BottomText={"tsu"}/>
            <OutCard TopText={"テ"} BottomText={"te"}/>
            <OutCard TopText={"ト"} BottomText={"to"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ナ"} BottomText={"na"}/>
            <OutCard TopText={"ニ"} BottomText={"ni"}/>
            <OutCard TopText={"ヌ"} BottomText={"nu"}/>
            <OutCard TopText={"ネ"} BottomText={"ne"}/>
            <OutCard TopText={"ノ"} BottomText={"no"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ハ"} BottomText={"ha"}/>
            <OutCard TopText={"ヒ"} BottomText={"hi"}/>
            <OutCard TopText={"フ"} BottomText={"fu"}/>
            <OutCard TopText={"ヘ"} BottomText={"he"}/>
            <OutCard TopText={"ホ"} BottomText={"ho"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"マ"} BottomText={"ma"}/>
            <OutCard TopText={"ミ"} BottomText={"mi"}/>
            <OutCard TopText={"ム"} BottomText={"mu"}/>
            <OutCard TopText={"メ"} BottomText={"me"}/>
            <OutCard TopText={"モ"} BottomText={"mo"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ヤ"} BottomText={"ya"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ユ"} BottomText={"yu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ヨ"} BottomText={"yo"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ラ"} BottomText={"ra"}/>
            <OutCard TopText={"リ"} BottomText={"ri"}/>
            <OutCard TopText={"ル"} BottomText={"ru"}/>
            <OutCard TopText={"レ"} BottomText={"re"}/>
            <OutCard TopText={"ロ"} BottomText={"ro"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ワ"} BottomText={"wa"}/>
            <OutCard TopText={"ヰ"} BottomText={"wi"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ヱ"} BottomText={"we"}/>
            <OutCard TopText={"ヲ"} BottomText={"wo"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ン"} BottomText={"n"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
        </div>
    </div>


    <div className='Pannel'>{/*Katakana Dakuten*/}
        <h1>Katakana <br /> Dakuten</h1>
        <div className='grid'>
            <OutCard TopText={"ガ"} BottomText={"ga"}/>
            <OutCard TopText={"ギ"} BottomText={"gi"}/>
            <OutCard TopText={"グ"} BottomText={"gu"}/>
            <OutCard TopText={"ゲ"} BottomText={"ge"}/>
            <OutCard TopText={"ゴ"} BottomText={"go"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"ザ"} BottomText={"za"}/>
            <OutCard TopText={"ジ"} BottomText={"zi"}/>
            <OutCard TopText={"ズ"} BottomText={"zu"}/>
            <OutCard TopText={"ゼ"} BottomText={"ze"}/>
            <OutCard TopText={"ゾ"} BottomText={"zo"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"ダ"} BottomText={"da"}/>
            <OutCard TopText={"ヂ"} BottomText={"di"}/>
            <OutCard TopText={"ヅ"} BottomText={"do"}/>
            <OutCard TopText={"デ"} BottomText={"de"}/>
            <OutCard TopText={"ド"} BottomText={"do"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"バ"} BottomText={"ba"}/>
            <OutCard TopText={"ビ"} BottomText={"bi"}/>
            <OutCard TopText={"ブ"} BottomText={"bu"}/>
            <OutCard TopText={"ベ"} BottomText={"be"}/>
            <OutCard TopText={"ボ"} BottomText={"bo"}/>
        </div>
    </div>

    <div className='Pannel'>{/*Katakana Handakuten*/}
        <h1>Katakana <br /> Handakuten</h1>
        <div className='grid'>
            <OutCard TopText={"パ"} BottomText={"pa"}/>
            <OutCard TopText={"ピ"} BottomText={"pi"}/>
            <OutCard TopText={"プ"} BottomText={"pu"}/>
            <OutCard TopText={"ペ"} BottomText={"pe"}/>
            <OutCard TopText={"ポ"} BottomText={"po"}/>
        </div>
    </div>

    <div className='Pannel'>{/*Modified Katakana*/}
        <h1>Modified <br /> Katakana</h1>
        <div className='grid'>
            <OutCard TopText={"キャ"} BottomText={"kya"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"キュ"} BottomText={"kyu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"キョ"} BottomText={"kyo"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"シャ"} BottomText={"sha"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"シュ"} BottomText={"shu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ショ"} BottomText={"sho"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"チャ"} BottomText={"cha"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"チュ"} BottomText={"chu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"チョ"} BottomText={"cho"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"ニャ"} BottomText={"nya"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ニュ"} BottomText={"nyu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ニョ"} BottomText={"nyo"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"ヒャ"} BottomText={"hya"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ヒュ"} BottomText={"hyu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ヒョ"} BottomText={"hyo"}/>
        </div>
        <div className="grid">
            <OutCard TopText={"ファ"} BottomText={"fa"}/>
            <OutCard TopText={"フィ"} BottomText={"fi"}/>
            <OutCard TopText={"フ"} BottomText={"fu"}/>
            <OutCard TopText={"フェ"} BottomText={"fe"}/>
            <OutCard TopText={"フォ"} BottomText={"fo"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"ミャ"} BottomText={"mya"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ミュ"} BottomText={"myu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"ミョ"} BottomText={"myo"}/>
        </div>
        <div className='grid'>
            <OutCard TopText={"リャ"} BottomText={"rya"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"リュ"} BottomText={"ryu"}/>
            <OutCard TopText={"　"} BottomText={"　"}/>
            <OutCard TopText={"リョ"} BottomText={"ryo"}/>
        </div>
        <h1>If you feel anything is missing please contact us!</h1>
    </div>
</div>
  );
}

export default Katakana;
