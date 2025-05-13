import { server } from "./mocks/browser";

beforeAll(() => server.start());
afterEach(() => server.resetHandlers());
afterAll(() => server.stop());
