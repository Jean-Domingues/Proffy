import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEWsWIqtFHX8A/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=kYvAr4yy70hFraNorIU1zxfcHnNJy8CFyF5LFupToys"
          alt="Jean Domingues"
        />
        <div>
          <strong>Jean Domingues</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum
        Lorem, ipsum.
        <br />
        <br />
        Nesciunt voluptatum quae reiciendis culpa error maxime voluptate quidem
        animi illum fugiat.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>

        <button type="button">
          <img src={wppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
