import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/12039169?s=460&u=0b26f6cc1de7af99fb3efbfe4da57670a6fe4323&v=4"
            alt="perfil"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={26} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/12039169?s=460&u=0b26f6cc1de7af99fb3efbfe4da57670a6fe4323&v=4"
            alt="perfil"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={26} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/12039169?s=460&u=0b26f6cc1de7af99fb3efbfe4da57670a6fe4323&v=4"
            alt="perfil"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={26} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
