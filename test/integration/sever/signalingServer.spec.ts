import 'regenerator-runtime/runtime';
import signalingServer from '../../../app/server/signalingServer';

const signalingServerInstance = signalingServer;

describe('Signaling Server', () => {
  beforeAll(async () => {
    signalingServerInstance.start();
  });

  afterAll(() => {
    signalingServerInstance.stop();
  });
  it('should start signaling server', async () => {
    expect(signalingServerInstance.server.listening).toBe(true);
  });
});
