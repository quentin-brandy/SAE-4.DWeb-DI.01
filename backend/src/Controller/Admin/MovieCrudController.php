<?php

namespace App\Controller\Admin;

use App\Entity\Movie;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;


class MovieCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Movie::class;
    }
    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name');
        yield AssociationField::new('category');
        yield TextField::new('release_date');
        yield TextEditorField::new('short_desc');
        yield TextEditorField::new('long_desc');
        yield TextField::new('catchphrase');
        yield TextField::new('trailer');
        yield TextField::new('vertical_url');
        yield TextField::new('horizontal_url');
    }
 
    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
