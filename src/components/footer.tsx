import { Typography, Button, Input } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Θέλετε να λαμβάνετε νέα μας;
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Δώστε μας το email σας για να σας στέλνουμε νέα και προσφορές από τον Οίστρο.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Το e-mail σας
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  Συμφωνώ με τους{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Όρους Χρήσης και Πολιτική Απορρήτου{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                Εγγραφή
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a> and Oistros Cafe.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
