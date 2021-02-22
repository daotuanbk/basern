import produce from 'immer';

interface TestState {
  count: string;
}

interface TestModel {
  state: TestState;
  reducers: {
    increment: (state: TestState, payload: number) => TestState;
  };
}

export const testModel: TestModel = {
  state: {
    count: 0,
  },
  reducers: {
    increment: produce((state: TestState, payload: number) => {
      state.count += payload;
    }),
  },
};
