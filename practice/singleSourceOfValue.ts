const Colors = {
  Primary: 'RED',
  Secondary: 'BLUE'
} as const

type ValidColor = typeof Colors;

const setColor = (input: typeof Colors[keyof typeof Colors]) => {
  console.log(input);
}

const set = setColor('BLUE')