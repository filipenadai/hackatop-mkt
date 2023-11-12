/* eslint-disable @next/next/no-img-element */
import { FormEvent, FormEventHandler, useState } from "react"
import classNames from 'classnames';

export function Form() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');

  async function requestDevice(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('a');
    setIsLoading(true);

    try {
      console.log('requisição');
      const response = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
        }),
      })
      setQuestion('');
      const jsonResponse = await response.json();
      console.log(jsonResponse.answer);
      setResponse(jsonResponse.answer);
    } catch (err) {
      console.log('erro', err);
      setError('Falha ao fazer a requisição! Tente novamente mais tarde.')
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="form" className="flex max-w-5xl flex-col md:flex-row mx-auto justify-center md:justify-between items-center w-full px-4 py-12 md:py-24">
      <form onSubmit={requestDevice} className={classNames('bg-[#fafafa] h-auto max-w-md shadow-md rounded-xl md:rounded-3xl py-4 md:py-8 px-8 md:px-12 overflow-hidden motion-reduce:transition-all', {
        'h-auto': response,
        'h-1/2': !response,
      })}>
        <h3 className="text-black font-semibold text-xl md:text-2xl">Faça o teste você mesmo!</h3>
        <p className="text-black mt-2">Fale para a Caca o que você espera de um celular e receba o Infinix ideal para você.</p>
        <div className={classNames("flex transition-all items-center mt-4", {
        })}>
          <div className={classNames('transition-all w-full h-auto bg-white rounded-lg border-[#e5e5e5] border-[1px] flex items-center py-4 px-4 flex-1', {
            'h-14': !response || !isLoading
          })}>
            <input
              type="text"
              className={
                classNames("outline-none w-full text-black", {'hidden': isLoading || response })
              }
              value={question}
              placeholder="O que você procura?"
              onChange={e => setQuestion(e.target.value)}
            />
            <div
              className={classNames("bg-white flex items-end rounded-full justify-center gap-1", {
                'hidden': !isLoading,
              })}
            >
              <p className="text-slate-500">Digitando</p>
              <div className="flex gap-1 mb-[6px]">
                <div className="bg-slate-500 w-1 h-1 rounded-full animate-bounce" style={{ animationDelay: '0.1s'}}></div>
                <div className="bg-slate-500 w-1 h-1 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                <div className="bg-slate-500 w-1 h-1 rounded-full animate-bounce" style={{ animationDelay: '0.3s'}}></div>
              </div>
            </div>

            <div className={classNames("w-full", {
              'hidden': !response
            })}>
              <div className="flex items-center gap-2">
                <img src="/logo-header.png" alt="" className={classNames('w-12 h-12 rounded-full')} />
                <strong className="text-green-500">Caca</strong>
              </div>
              <p className="text-black my-2 text-sm py-2">{response}</p>
              <a href="https://www.meuinfinix.com.br/" className="border-none bg-green-500 text-white font-bold py-2 px-4 rounded-md">Compre Agora!</a>
            </div>
          </div>

          <button type="submit" className={classNames('transition-all bg-green-500 h-10 w-10 border-none rounded-full flex items-center justify-center ml-2', {
            'h-0 w-0': isLoading || response
          })}>
            <img src="/send.svg" alt="Flecha sinalizando enviar" />
          </button>
        </div>
      </form>
      <img src="/caca-form.png" alt="" className="max-w-md mt-4 md:mt-0 w-full object-contain" />
    </div>
  )
}
