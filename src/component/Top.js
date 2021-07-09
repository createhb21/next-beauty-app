import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <img
            src="/images/LOGO_SOLO.png"
            alt="logo"
            style={{
              display: 'block',
              width: 80,
              height: '88%',
            }}
          />
        </div>
        <Header as="h1" style={{ fontWeight: 'bolder' }}>
          Ubueatu
        </Header>
      </div>
      <Gnb />
    </div>
  );
}
