<?php

namespace App\Repository;

use App\Entity\MovieHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MovieHistory>
 *
 * @method MovieHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method MovieHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method MovieHistory[]    findAll()
 * @method MovieHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MovieHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MovieHistory::class);
    }

    //    /**
    //     * @return MovieHistory[] Returns an array of MovieHistory objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?MovieHistory
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
