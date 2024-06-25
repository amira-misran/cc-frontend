import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

import FormProvider from 'src/components/hook-form/form-provider';
import { RHFTextField, RHFMultiSelect } from 'src/components/hook-form';

export const EditRequirements = ({ open, campaign, onClose }) => {
  const methods = useForm({
    defaultValues: {
      audienceGender: campaign?.campaignRequirement?.gender || [],
      audienceAge: campaign?.campaignRequirement?.age || [],
      audienceLocation: campaign?.campaignRequirement?.geoLocation || [],
      audienceLanguage: campaign?.campaignRequirement?.language || [],
      audienceCreatorPersona: campaign?.campaignRequirement?.creator_persona || [],
      audienceUserPersona: campaign?.campaignRequirement?.user_persona || '',
    },
  });

  const { watch } = methods;

  const audienceLocation = watch('audienceLocation');

  return (
    <Dialog
      open={open.campaignRequirements}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">Requirements</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" p={1.5}>
          <FormProvider methods={methods}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
                gap: 2,
              }}
            >
              <RHFMultiSelect
                name="audienceGender"
                checkbox
                chip
                options={[
                  { value: 'female', label: 'Female' },
                  { value: 'male', label: 'Male' },
                  { value: 'nonbinary', label: 'Non-Binary' },
                ]}
                label="Audience Gender"
              />

              <RHFMultiSelect
                name="audienceAge"
                checkbox
                chip
                options={[
                  { value: '18-25', label: '18-25' },
                  { value: '26-34', label: '26-34' },
                  { value: '35-40', label: '35-40' },
                  { value: '>40', label: '>40' },
                ]}
                label="Audience Age"
              />

              <RHFMultiSelect
                name="audienceLocation"
                label="Audience Geo Location"
                checkbox
                chip
                options={[
                  { value: 'KlangValley', label: 'Klang Valley' },
                  { value: 'Selangor', label: 'Selangor' },
                  { value: 'KualaLumpur', label: 'Kuala Lumpur' },
                  { value: 'MainCities', label: 'Main cities in Malaysia' },
                  { value: 'EastMalaysia', label: 'East Malaysia' },
                  { value: 'Others', label: 'Others' },
                ]}
              />

              {audienceLocation === 'Others' && (
                <TextField
                  name="audienceLocation"
                  label="Specify Other Location"
                  variant="outlined"
                />
              )}

              <RHFMultiSelect
                name="audienceLanguage"
                label="Audience Language"
                checkbox
                chip
                options={[
                  { value: 'Malay', label: 'Malay' },
                  { value: 'English', label: 'English' },
                  { value: 'Chinese', label: 'Chinese' },
                  { value: 'Tamil', label: 'Tamil' },
                  { value: 'Korean', label: 'Korean' },
                ]}
              />

              <RHFMultiSelect
                name="audienceCreatorPersona"
                label="Audience Creator Persona"
                checkbox
                chip
                options={[
                  { value: 'lifestyle', label: 'LifeStyle' },
                  { value: 'fashion', label: 'Fashion' },
                  { value: 'beauty', label: 'Beauty' },
                  { value: 'tech', label: 'Tech' },
                  { value: 'sports', label: 'Sports & Fitness' },
                  { value: 'health', label: 'Health & wellness' },
                  { value: 'family', label: 'Family & motherhood' },
                  { value: 'finance', label: 'Finance' },
                  { value: 'education', label: 'Education' },
                  { value: 'music', label: 'Music' },
                  { value: 'gamer', label: 'Gamer' },
                  { value: 'entertainment', label: 'Entertainment' },
                  { value: 'travel', label: 'Travel' },
                ]}
              />

              <RHFTextField
                name="audienceUserPersona"
                label="User Persona"
                placeholder=" let us know who you want your campaign to reach!"
              />
            </Box>
          </FormProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose('campaignRequirements')}>Cancel</Button>
        <Button autoFocus color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

EditRequirements.propTypes = {
  open: PropTypes.bool,
  campaign: PropTypes.object,
  onClose: PropTypes.func,
};
