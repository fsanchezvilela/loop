import * as Form from '@radix-ui/react-form';
import SvgSearch from '../icons/Search';
import { SearchBoxProps } from './SearchBox.type';

const SearchBox = ({ onChange, value }: SearchBoxProps) => (
  <Form.Root className="w-full py-[30px]">
    <Form.Field className="relative mb-[10px] grid" name="search">
      <SvgSearch className="absolute  left-4 top-1/3" />
      <Form.Control asChild>
        <input
          value={value}
          onChange={(e) => onChange(e)}
          className="box-border inline-flex w-full appearance-none items-center justify-center rounded-[4px] bg-dark-wood p-[15px] px-[10px] indent-[40px] text-[15px] leading-none text-cloud  shadow-[0_0_0_1px] outline-none transition-all duration-300 ease-in-out hover:border-purple-haze hover:shadow-[0_0_0_1px_black] hover:outline-purple-haze  focus:border-purple-haze focus:shadow-[0_0_0_2px_black] focus:outline-purple-haze"
          type="search"
        />
      </Form.Control>
    </Form.Field>
  </Form.Root>
);

export default SearchBox;
