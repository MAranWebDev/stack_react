import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const handleSubmitSearch = () => {};
const handleClickClean = () => {};

export const SearchBox = () => {
  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 2 }}
      component="form"
      onSubmit={handleSubmitSearch}
    >
      <TextField name="search_id" label="Id" variant="outlined" />

      <TextField name="search_words" label="Palabras" variant="outlined" />

      <Button type="submit" variant="outlined">
        <SearchIcon />
      </Button>

      <Button type="button" variant="outlined" onClick={handleClickClean}>
        <CleaningServicesIcon />
      </Button>
    </Paper>
  );
};
