const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('고양이');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult(value.charAt(value.length - 1) + ' -> ');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult(word.charAt(word.length - 1) + '로 시작하는 단어를 입력해 주세요!!!');
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          // defaultValue="이발사" 초기값일때
          ref={inputRef}
          value={value}     // vlaue 부분이 onSubmitForm 에서만 사용할때 id 를 추가해서 e.target.childern.value로  사용가능 언컨트롤드 인풋
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
