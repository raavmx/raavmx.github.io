export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

export class SomeClass {
  set: Set<number>;
  channel: BroadcastChannel;
  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money': {
      const value = data.value as Money;
      return value.amount;
    }
    case 'Percent': {
      const value = data.value as Percent;
      return value.percent;
    }

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const unhandled: never = data.type;
      throw new Error(`unknown type: ${data.type}`);
    }
  }
};
