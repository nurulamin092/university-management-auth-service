import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post('/create-faculty', AcademicFacultyController.createAcademicFaculty);
router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.get('/', AcademicFacultyController.getAcademicFaculty);
router.patch('/:id', AcademicFacultyController.updateFaculty);
router.delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRouter = router;
