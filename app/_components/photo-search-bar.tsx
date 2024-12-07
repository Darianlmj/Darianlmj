'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import photos from '@/data/photos';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ListFilterIcon } from 'lucide-react';

type Checked = DropdownMenuCheckboxItemProps['checked']

const countries = Array.from(new Set(photos.map((photo) => photo.tags.country)));

export default function PhotoSearchBar({
  filterPhotoCollection
}: {
  filterPhotoCollection: (query: Record<string, Checked>) => void
}) {
  const initialCheckedCountries = countries.reduce((acc, country) => {
    acc[country] = true;
    return acc;
  }, {} as Record<string, Checked>);

  const [checkedCountries, setCheckedCountries] = React.useState<
    Record<string, Checked>
  >(initialCheckedCountries);

  const handleCheckedChange = (country: string, checked: Checked) => {
    setCheckedCountries((prev) => {
      const newCheckedCountries = {
        ...prev,
        [country]: checked
      };
      return newCheckedCountries;
    });
  };

  React.useEffect(() => {
    filterPhotoCollection(checkedCountries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCountries]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          Filter by Country <ListFilterIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel className='flex justify-between items-center'>
          Countries
          {Object.values(checkedCountries).some((checked) => !checked) && (
            <Button
              variant='destructive'
              size='sm'
              className='ml-2'
              onClick={() => setCheckedCountries(initialCheckedCountries)}
            >
              Reset
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {countries.map((country) => (
          <DropdownMenuCheckboxItem
            key={country}
            checked={checkedCountries[country] || false}
            onCheckedChange={(checked) => handleCheckedChange(country, checked)}
          >
            {country}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
