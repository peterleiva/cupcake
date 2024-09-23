import { Button, ButtonProps } from 'react-native-paper';

export interface CategoryPillProps extends Omit<ButtonProps, 'mode'> {
  active?: boolean;
}

const CategoryPill = ({ active, ...btnProps }: CategoryPillProps) => {
  return (
    <Button
      mode={active ? 'contained-tonal' : 'outlined'}
      compact={true}
      {...btnProps}
    ></Button>
  );
};

export default CategoryPill;
