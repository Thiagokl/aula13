import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Heart from './Heart';
import '@testing-library/jest-dom/extend-expect';
describe("Heart Component", () => {

 
it("should render correctly", () => {
        render(<Heart />);
        expect(screen.queryByTestId("heart")).toBeInTheDocument();
      });

      it("should call onClick correctly",async () => {
        const onClick = jest.fn();

        render(<Heart onClick={onClick} />);
        expect(screen.queryByTestId("heart")).toBeInTheDocument();

        await userEvent.click(screen.queryByTestId("heart")); 

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    
  });
