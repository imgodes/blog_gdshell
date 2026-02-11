import React, { useState } from 'react';
import styles from './styles.module.css';

export default function AboutPopover() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setOpen(true)}
      >
        Sobre mim
      </button>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <header className={styles.header}>
              <h2>Sobre o autor</h2>
              <button
                className={styles.close}
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                ×
              </button>
            </header>

            <div className={styles.content}>
            <p>
            Olá! Estou feliz que esteja por aqui! Neste site você encontrará temas técnicos
            como computação, cybersecurity, hacking, física e matemática, e também gosto de
            me arriscar escrevendo sobre literatura, filosofia e experiências pessoais.
            </p>
            <p>
            Espero que goste! Estou sempre tentando melhorar minha didática e escrita,
            mas graças às aulas em que dormi no ensino médio, certamente haverá deslizes, portanto,
            sinta-se livre para me avisar.
            </p>
            <p>
            Ademais, estou tentando escrever um livro sobre fundamentos em computação, 
            com a intenção de construir uma boa base para cybersecurity. Minha ideia é 
            solucionar grande parte das dores que eu sentia quando comecei. A maioria
            dos autores de livros técnicos se contenta em apenas dizer os requisitos e partir
            para o conteúdo principal. Não há nada de errado nisso é claro. Mas eu gostaria de ir 
            além e tentar fornecer essa base. Um desafio e tanto, mas por que não tentar?
            </p>
            <p>
              Sobre o blog, eu gosto de escrever sobre vários temas, técnicos e não técnicos. 
              Por enquanto tem poucos posts, então está fácil de entender. De qualquer forma 
              todos os posts possuem tags e caso busque algum assunto específico só clicar na tag do tema 
              que tiver interesse.
            </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
